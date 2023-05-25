import Image from "next/image";

import Select from "../shared/select";
import SearchButton from "../shared/search-button";
import Table from "../shared/table/index";

const Filter = () => {
  return (
    <div className="relative flex flex-col items-start w-full mt-4 md:gap-x-2 gap-y-3 md:flex-row md:items-center md:justify-between">
      <h4 className="text-sm lg:text-base text-primary ">Searching Flats:</h4>
      <div className="flex items-center text-sm gap-x-4 md:gap-x-1">
        <h4>Area:</h4>
        <div className="flex gap-x-4 md:gap-x-1 lg:gap-x-4">
          <Select />
          <Image
            src="/images/connect.svg"
            alt="connect"
            width={20}
            height={20}
          />
          <Select />
        </div>
      </div>
      <div className="flex items-center text-sm gap-x-4 md:gap-x-1">
        <h4>Price:</h4>
        <div className="flex gap-x-4 md:gap-x-1 lg:gap-x-4">
          <Select />
          <Image
            src="/images/connect.svg"
            alt="connect"
            width={20}
            height={20}
          />
          <Select />
        </div>
      </div>
      <SearchButton />
      <div className="w-full py-4 md:w-fit ">
        <Table />
      </div>
    </div>
  );
};

export default Filter;
