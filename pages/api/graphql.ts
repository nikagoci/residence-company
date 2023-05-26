import { Condition } from "@/fakeData";
import prisma from "@/libs/prisma";
import { gql, ApolloServer } from "apollo-server-micro";

type AddFlatArgs = {
        flatNum: number,
        floor: number,
        livingArea: number,
        balconies: number[],
        bedrooms:number[],
        wetPoints: number[],
        price: number,
        condition: Condition,
        points: string,
}

const typeDefs = gql`
  type Flat {
    id: String
    flatNum: Int
    floor: Int
    livingArea: Float
    balconies: [Float]
    bedrooms: [Float]
    wetPoints: [Float]
    price: Int
    condition: Condition
    points: String
  }

  enum Condition {
    sale
    sold
  }

  type Count {
    _all: Int
  }

  type FlatForSale {
    _count: Count
    floor: Int
  }

  type FlatsWithLeftFlats {
    leftFlats: [FlatForSale]
    flats: [Flat]
  }

  type Query {
    Flats(floor: Int): [Flat]
    FlatsInfo(
      priceFrom: Int
      priceTo: Int
      areaFrom: Int
      areaTo: Int
    ): FlatsWithLeftFlats
    Flat(flatNum: Int): Flat
  }
`;

const resolvers = {
  Query: {
    Flats: (_parent: Flat, _args: { floor: number }, _context: {}) => {
      const { floor } = _args;

      return prisma.flat.findMany({ where: { floor } });
    },
    FlatsInfo: async (_parent: Flat, _args: {priceFrom: number, priceTo: number, areaFrom: number, areaTo: number}, _context: {}) => {
      const { priceFrom, priceTo, areaFrom, areaTo } = _args;

      const [leftFlats, flats] = await prisma.$transaction([
        prisma.flat.groupBy({
          by: ["floor"],
          where: {
            condition: Condition.sale,
          },
          _count: {
            _all: true,
          },
          orderBy: {
            floor: "asc",
          },
        }),
        prisma.flat.findMany({
          where: {
            AND: [
              { price: { gte: priceFrom }, livingArea: { gte: areaFrom } },
              { price: { lte: priceTo }, livingArea: { lte: areaTo } },
            ],
          },
        }),
      ]);

      return { leftFlats, flats };
    },
    Flat: (_parent: Flat, _args: { flatNum: number }, _context: {}) => {
      const {flatNum} = _args;

      return prisma.flat.findUnique({ where: {flatNum} })
    }
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
