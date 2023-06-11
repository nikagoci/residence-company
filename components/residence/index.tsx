import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import Filter from "./filter";
import ResidencePolygon from "./residence-polygon";
import { GET_FLATS_INFO } from "@/libs/graphql/queries";
import { FilterContext } from "@/context/filterContext";


type FlatInfo = {
  FlatsInfo: {
    leftFlats: {
      floor: number;
      _count: { _all: number };
    }[];
    flats: Flat[];
  };
};

const Residence = () => {
  const { areaFrom, areaTo, priceFrom, priceTo } = useContext(FilterContext);
  const { t } = useTranslation();
  const { push } = useRouter();

  const { data, loading, error } = useQuery<FlatInfo>(GET_FLATS_INFO, {
    variables: { areaFrom, areaTo, priceFrom, priceTo },
  });

  if (error) {
    push("/error");
  }

  return (
    <section className="pt-16 pb-4">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-[400] text-black">
          {t("residence.title")}
        </h1>
        <Filter flats={data?.FlatsInfo.flats} loading={loading} />
        <div className="relative flex justify-center w-full h-full mt-10">
          <ResidencePolygon
            loading={loading}
            leftFlatInfo={data?.FlatsInfo.leftFlats}
          />
        </div>
        <p className="w-[100%] text-xl md:w-[60%] md:text-sm mt-7 text-[#797984]">
          {t("residence.paragraph")}
        </p>
      </div>
    </section>
  );
};

export default Residence;
