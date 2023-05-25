import { gql } from "@apollo/client";

export const GET_FLATS_INFO = gql`
  query ($priceFrom: Int, $priceTo: Int, $areaFrom: Int, $areaTo: Int) {
    FlatsInfo(
      priceFrom: $priceFrom
      priceTo: $priceTo
      areaTo: $areaTo
      areaFrom: $areaFrom
    ) {
      flats {
        flatNum
        floor
        livingArea
        balconies
        bedrooms
        price
        condition
        id
      }
      leftFlats {
        _count {
          _all
        }
        floor
      }
    }
  }
`;

export const GET_ALL_FLATS = gql`
  query getAllFlats($floor: Int) {
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
`;

export const GET_SINGLE_FLAT = gql`
  query getSingleFlat($flatNum: Int) {
    Flat(flatNum: $flatNum) {
      flatNum
      floor
      livingArea
      balconies
      bedrooms
      wetPoints
      price
      condition
      id
    }
  }
`;
