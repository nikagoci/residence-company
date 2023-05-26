import Image from "next/image";
import { ChangeEvent, FormEvent, useContext, useState } from "react";

import Select from "../shared/select";
import SearchButton from "../shared/search-button";
import Table from "../shared/table/index";
import { FilterContext } from "@/context/filterContext";

type Props = {
  flats: Flat[] | undefined;
  loading: boolean;
  
};

type FilterValues = {
  
    areaFrom: number;
    areaTo: number;
    priceFrom: number;
    priceTo: number;
  
};

const Filter = ({ flats, loading }: Props) => {
  const [filterValues, setFilterValues] = useState<FilterValues[]>([
    { areaFrom: 50, areaTo: 60, priceFrom: 30000, priceTo: 50000 },
  ]);

  const { addAreaFromValue, addAreaToValue, addPriceFromValue, addPriceToValue } = useContext(FilterContext)


  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addAreaFromValue(filterValues[0].areaFrom)
    addAreaToValue(filterValues[0].areaTo)
    addPriceFromValue(filterValues[0].priceFrom)
    addPriceToValue(filterValues[0].priceTo)
  };

  const changeHandler = (value: number, id: string) => {
    setFilterValues((prevFilterValues: FilterValues[]) => {
      const updatedFilterValues = prevFilterValues.map((filterValue: FilterValues) => {
        if (id === "areaFrom") {
          return { ...filterValue, areaFrom: value };
        } else if (id === "areaTo") {
          return { ...filterValue, areaTo: value };
        } else if (id === "priceFrom") {
          return { ...filterValue, priceFrom: value };
        } else if (id === "priceTo") {
          return { ...filterValue, priceTo: value };
        }
        return filterValue;
      });
  
      return updatedFilterValues;
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="relative flex flex-col items-start w-full mt-4 md:gap-x-2 gap-y-3 md:flex-row md:items-center md:justify-between"
    >
      <h4 className="text-sm lg:text-base text-primary ">Searching Flats:</h4>
      <div className="flex items-center text-sm gap-x-4 md:gap-x-1">
        <h4>Area:</h4>
        <div className="flex gap-x-4 md:gap-x-1 lg:gap-x-4">
          <Select
            options={[50, 60, 70, 80, 90, 100]}
            id="areaFrom"
            changeHandler={changeHandler}
          />
          <Image
            src="/svgs/connect.svg"
            alt="connect"
            width={20}
            height={20}
          />
          <Select
            options={[60, 70, 80, 90, 100, 150]}
            id="areaTo"
            changeHandler={changeHandler}
          />
        </div>
      </div>
      <div className="flex items-center text-sm gap-x-4 md:gap-x-1">
        <h4>Price:</h4>
        <div className="flex gap-x-4 md:gap-x-1 lg:gap-x-4">
          <Select
            options={[30000, 35000, 40000, 45000, 50000]}
            id="priceFrom"
            changeHandler={changeHandler}
          />
          <Image
            src="/svgs/connect.svg"
            alt="connect"
            width={20}
            height={20}
          />
          <Select
            options={[50000, 55000, 60000, 65000, 70000]}
            id="priceTo"
            changeHandler={changeHandler}
          />
        </div>
      </div>
      <SearchButton loading={loading} />
      <div className="w-full py-4 md:w-fit ">
        <Table flats={flats} loading={loading} />
      </div>
    </form>
  );
};

export default Filter;
