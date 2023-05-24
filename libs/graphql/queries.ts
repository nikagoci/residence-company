import { gql } from "@apollo/client";

export const GET_LEFT_FLATS = gql`
  query {
    LeftFlats {
      floor
      _count {
        _all
      }
    }
  }
`;
