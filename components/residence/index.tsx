import { useQuery } from "@apollo/client";
import Filter from "./filter";
import ResidencePolygon from "./residence-polygon";
import { GET_FLATS_INFO } from "@/libs/graphql/queries";
import { useContext } from "react";
import { FilterContext } from "@/context/filterContext";

type FlatInfo = {
  FlatsInfo: {
    leftFlats: {
      floor: number;
      _count: { _all: number };
    }[],
    flats: Flat[]
  }
};

const Residence = () => {
  const { areaFrom, areaTo, priceFrom, priceTo } = useContext(FilterContext)

  const { data, loading, error } = useQuery<FlatInfo>(GET_FLATS_INFO, {
    variables: { areaFrom, areaTo, priceFrom, priceTo },
  });

  if(error){
    return <h1>error</h1>
  }

  return (
    <section className="pt-16 pb-4">
      <div className="flex flex-col items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-3xl font-[400] text-black">Choose Your House</h1>
        <Filter flats={data?.FlatsInfo.flats} loading={loading} />
        <div className="relative flex justify-center w-full h-full mt-10">
          <ResidencePolygon loading={loading} leftFlatInfo={data?.FlatsInfo.leftFlats} />
        </div>
        <p className="w-[100%] text-xl md:w-[60%] md:text-sm mt-7 text-[#797984]">
          Rivertown A new premium class complex TURCVG is an exquisitely
          designed 5-storey residential building. The complex is located in the
          prestigious area Digomi 8 and is distinguished by its
          multi-functionality. Everything here is tailored to the comfort of
          residents: an outdoor pool and spa for relaxation, a fitness center
          and sports court for healthy living, lounge and relaxation spaces for
          relaxation, 5,000 sq.m. Green yard. For even more convenience, the
          Rivertown area housed cafes, supermarkets and a pharmacy. In the
          construction of a residential house, the highest quality,
          environmentally friendly, energy-efficient building block of the
          German brand YTONG is used. Itong block maintains temperature, saves
          40% energy and reduces utility bills.
        </p>
      </div>
    </section>
  );
};

export default Residence;
