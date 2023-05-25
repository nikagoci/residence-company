import { createContext, useReducer, ReactNode } from "react";
import reducer from "./reducer";

const initialState: ValueInterface = {
  areaFrom: 0,
  areaTo: 9999999,
  priceFrom: 0,
  priceTo: 9999999,
  addAreaFromValue: (value: number) => {},
  addAreaToValue: (value: number) => {},
  addPriceFromValue: (value: number) => {},
  addPriceToValue: (value: number) => {}
};

export const FilterContext = createContext(initialState);


interface ValueInterface {
  areaFrom: number;
  areaTo: number;
  priceFrom: number;
  priceTo: number;
  addAreaFromValue: (value: number) => void;
  addAreaToValue: (value: number) => void;
  addPriceFromValue: (value: number) => void;
  addPriceToValue: (value: number) => void;
}

export const FilterContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addAreaFromValue = (value: number) => {
    dispatch({ type: "ADD_AREA_FROM_VALUE", payload: value });
  };
  const addAreaToValue = (value: number) => {
    dispatch({ type: "ADD_AREA_TO_VALUE", payload: value });
  };
  const addPriceFromValue = (value: number) => {
    dispatch({ type: "ADD_PRICE_FROM_VALUE", payload: value });
  };
  const addPriceToValue = (value: number) => {
    dispatch({ type: "ADD_PRICE_TO_VALUE", payload: value });
  };

  const value: ValueInterface = {
    areaFrom: state.areaFrom,
    areaTo: state.areaTo,
    priceFrom: state.priceFrom,
    priceTo: state.priceTo,
    addAreaFromValue,
    addAreaToValue,
    addPriceFromValue,
    addPriceToValue,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
