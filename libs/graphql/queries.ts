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

export const GET_ALL_FLATS = gql`
  query getAllFlats($floor: Int){
    Flats(floor: $floor) {
      flatNum
        floor
        livingArea
        balconies
        bedrooms
        wetPoints
        price
        condition
        points
    		id
    }
  }
`