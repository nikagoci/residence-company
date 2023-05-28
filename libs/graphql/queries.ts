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

export const FLAT_STATISTIC = gql`
  query {
    FlatStatistic {
      flatsSold
      totalIncome
      demandableFloor
      soldFlatsByFloor {
        floor
        _count {
          _all
        }
      }
    }
  }
`;

export const UPDATE_FLAT = gql`
  mutation updateFlat(
    $livingArea: Float
    $balconies: [Float]
    $bedrooms: [Float]
    $wetPoints: [Float]
    $price: Int
    $condition: Condition
    $flatNum: Int
  ) {
    updateFlat(
      livingArea: $livingArea
      balconies: $balconies
      bedrooms: $bedrooms
      wetPoints: $wetPoints
      price: $price
      condition: $condition
      flatNum: $flatNum
    ) {
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
