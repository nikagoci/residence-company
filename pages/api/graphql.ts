import { Condition } from "@/fakeData";
import prisma from "@/libs/prisma";
import { gql, ApolloServer } from "apollo-server-micro";

// type Flat = {
//     flatNum: number;
//     floor: number;
//     livingArea: number;
//     balconies: number[];
//     bedrooms: number[];
//     wetPoints: number[];
//     price: number;
//     condition: Condition;
//     points: string;
// }

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

    type Query {
        Flats: [Flat]
        LeftFlats: [FlatForSale]
    }

    type Mutation {
        addFlat(
            flatNum: Int
            floor: Int
            livingArea: Float
            balconies: [Float]
            bedrooms: [Float]
            wetPoints: [Float]
            price: Int
            condition: Condition
            points: String
        ): Flat
    }
`;

const resolvers = {
  Query: {
    Flats: (_parent: any, _args: any, _context: {}) => {
      return prisma.flat.findMany();
    },
    LeftFlats: (_parent: any, _args: any, _context: {}) => {
      return prisma.flat.groupBy({
        by: ['floor'],
        where: {
          condition: Condition.sale
        },
        _count: {
          _all: true
        },
        orderBy: {
          floor: 'asc'
        }
      })
    }
  },
  Mutation: {
    addFlat: (_parent: any, _args: any, _context: {}) => {
      const {
        flatNum,
        floor,
        livingArea,
        balconies,
        bedrooms,
        wetPoints,
        price,
        condition,
        points,
      } = _args;

      return prisma.flat.create({
        data: {
          flatNum,
          floor,
          livingArea,
          balconies,
          bedrooms,
          wetPoints,
          price,
          condition,
          points,
        },
      });
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const handler = apolloServer.createHandler({ path: "/api/graphql" });

export const config = { api: { bodyParser: false } };

export default handler;
