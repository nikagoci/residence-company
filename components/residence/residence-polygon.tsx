import { useState } from "react";
import Image from "next/image";
import { useQuery } from "@apollo/client";

import SingleResidencePolygon from "./single-residence-polygon";
import { GET_LEFT_FLATS } from "@/libs/graphql/queries";

const POLYGONS = [
  {
    id: "5",
    points: "63,291 171,135 1113,324 1120,385 153,247 66,344",
  },
  {
    id: "4",
    points: "65,342 151,247 1114,386 1120,450 150,352 65,416",
  },
  {
    id: "3",
    points: "63,418 147,351 1117,451 1114,518 147,439 66,485",
  },
  {
    id: "2",
    points: "65,484 148,440 1114,514 1116,579 147,516 67,553",
  },
  {
    id: "1",
    points: "67,553 148,514 1111,576 1114,639 147,601 68,626",
  },
];

type LeftFlats = {
  LeftFlats: {
    floor: number;
    _count: { _all: number };
  }[];
};

const ResidencePolygon = () => {
  const [hoveredPolygon, setHoveredPolygon] = useState<string | null>(null);
  const [leftFlats, setLeftFlats] = useState<null | number>(null);
  const { data, loading, error } = useQuery<LeftFlats>(GET_LEFT_FLATS);

  if (loading) {
    return (
      <div className="relative w-[100%] lg:w-[80%] h-full">
        <Image
          src="/images/residence.jpg"
          alt="residence"
          className="w-full h-full rounded-2xl"
          width={1220}
          height={820}
        />
      </div>
    );
  }

  if (error) {
    return <h1>error</h1>;
  }

  const handlePolygonHover = (polygonId: string) => {
    setHoveredPolygon(polygonId);

    if (data) {
      const hoveredFloor = data.LeftFlats.find(
        (flat) => flat.floor === +polygonId
      ) as { floor: number; _count: { _all: number } };
      setLeftFlats(hoveredFloor._count._all);
    }
  };

  const handlePolygonLeave = () => {
    setHoveredPolygon(null);
  };

  console.log(leftFlats);

  return (
    <div className="relative flex justify-center w-full h-full">
      <div className="relative w-[100%] lg:w-[80%] h-full">
        <Image
          src="/images/residence.jpg"
          alt="residence"
          className="w-full h-full rounded-2xl"
          width={1220}
          height={820}
        />
        {hoveredPolygon && (
          <div
            className={`${
              leftFlats === 0
            } absolute px-6 py-2 text-xs font-bold text-white sm:text-sm bg-blue top-4 right-4 rounded-xl `}
          >
            <h3>{hoveredPolygon} Floor</h3>
            <h3 className={`${leftFlats === 0 ? "text-red-500" : ""}`}>
              {leftFlats === 0
                ? "Every Flat Is Sold"
                : `Left: ${leftFlats} Flat`}
            </h3>
          </div>
        )}
      </div>
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1227 836"
      >
        {POLYGONS.map((polygon) => (
          <SingleResidencePolygon
            handlePolygonHover={handlePolygonHover}
            handlePolygonLeave={handlePolygonLeave}
            hoveredPolygon={hoveredPolygon}
            points={polygon.points}
            id={polygon.id}
            key={polygon.id}
          />
        ))}
      </svg>
    </div>
  );
};

export default ResidencePolygon;
