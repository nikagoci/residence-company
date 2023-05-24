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

    type Query {
        Flats: [Flat]
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
