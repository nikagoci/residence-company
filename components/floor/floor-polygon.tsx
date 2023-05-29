import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { useQuery } from "@apollo/client";
import Link from "next/link";

import SingleFloorPolygon from "./single-floor-polygon";
import { GET_ALL_FLATS } from "@/libs/graphql/queries";

type Props = {
  floorNum: string;
};

type AllFlats = {
  Flats: Flat[];
};

const FloorPolygon = ({ floorNum }: Props) => {
  const [hoveredPolygon, setHoveredPolygon] = useState<number | null>(null);
  const [totalArea, setTotalArea] = useState(0);
  const [disableButton, setDisableButton] = useState("");

  const { data, loading, error } = useQuery<AllFlats>(GET_ALL_FLATS, {
    variables: { floor: +floorNum },
    skip: !floorNum,
  });

  useEffect(() => {
    if (floorNum && +floorNum === 1) {
      setDisableButton("first");
    } else if (floorNum && +floorNum === 5) {
      setDisableButton("second");
    } else {
      setDisableButton("");
    }
  }, [floorNum]);

  useEffect(() => {
    if (hoveredPolygon) {
      const flat = data?.Flats.find(
        (flat) => flat.flatNum === hoveredPolygon
      ) as Flat;

      let balconyArea = 0;

      flat?.balconies.forEach((balcony) => {
        balconyArea += balcony;
      });

      setTotalArea(balconyArea + flat?.livingArea);
    }
  }, [hoveredPolygon]);

  if (loading) {
    return (
      <div className="relative flex justify-center w-full h-full">
        <div className="relative w-[100%] lg:w-[70%] h-full ">
          <Image
            src="/images/floor.jpg"
            alt="residence"
            className="w-full h-full rounded-2xl"
            width={1220}
            height={820}
          />
        </div>
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full gap-y-6">
          <h3 className="text-3xl font-bold text-primary">Floor {floorNum}</h3>
          <div className="flex gap-x-4">
            <Link
              href={`/residence/floor/${+floorNum - 1}`}
              className={`${
                disableButton === "first"
                  ? "bg-light_blue pointer-events-none"
                  : "bg-primary active:scale-110"
              } p-4 text-white transition duration-300 rounded-full `}
            >
              <ArrowLeftIcon className="w-4" />
            </Link>
            <Link
              href={`/residence/floor/${+floorNum + 1}`}
              className={`${
                disableButton === "second"
                  ? "bg-light_blue pointer-events-none"
                  : "bg-primay active:scale-110"
              } p-4 text-white transition duration-300 rounded-full `}
            >
              <ArrowRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>error</h1>;
  }

  const handlePolygonHover = (polygonId: number) => {
    setHoveredPolygon(polygonId);
  };

  const handlePolygonLeave = () => {
    setHoveredPolygon(null);
  };

  return (
    <div className="relative flex justify-center w-full h-full">
      <div className="relative w-[100%] lg:w-[70%] h-full ">
        <Image
          src="/images/floor.jpg"
          alt="residence"
          className="w-full h-full rounded-2xl"
          width={1220}
          height={820}
        />
        {hoveredPolygon && (
          <div className="absolute right-0 px-6 py-2 text-xs font-bold text-white lg:top-14 xl:top-24 top-4 sm:text-sm bg-primary rounded-xl ">
            <h3>Flat: {hoveredPolygon}</h3>
            <h3>Area: {totalArea.toFixed(1)} sq.m</h3>
          </div>
        )}
        <div className="absolute left-0 z-10 flex flex-col items-center justify-center w-full md:top-0 -top-16 gap-y-6">
          <h3 className="text-3xl font-bold text-primary">Floor {floorNum}</h3>
          <div className="flex gap-x-4">
            <Link
              href={`/residence/floor/${+floorNum - 1}`}
              className={`${
                disableButton === "first"
                  ? "bg-light_blue pointer-events-none"
                  : "bg-primary active:scale-110"
              } p-4 text-white transition duration-300 rounded-full `}
            >
              <ArrowLeftIcon className="w-4" />
            </Link>
            <Link
              href={`/residence/floor/${+floorNum + 1}`}
              className={`${
                disableButton === "second"
                  ? "bg-light_blue pointer-events-none"
                  : "bg-primary active:scale-110"
              } p-4 text-white transition duration-300 rounded-full `}
            >
              <ArrowRightIcon className="w-4" />
            </Link>
          </div>
        </div>
      </div>

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1227 836"
      >
        {data?.Flats.map((flat) => (
          <SingleFloorPolygon
            handlePolygonHover={handlePolygonHover}
            handlePolygonLeave={handlePolygonLeave}
            hoveredPolygon={hoveredPolygon}
            flat={flat}
            key={flat.flatNum}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloorPolygon;
