import { useState } from "react";
import SingleResidencePolygon from "./single-residence-polygon";
import Image from "next/image";

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

const ResidencePolygon = () => {
  const [hoveredPolygon, setHoveredPolygon] = useState<string | null>(null);

  const handlePolygonHover = (polygonId: string) => {
    setHoveredPolygon(polygonId);
  };

  const handlePolygonLeave = () => {
    setHoveredPolygon(null);
  };

  return (
    <div className="relative flex justify-center w-full h-full">
      <Image
        src="/images/residence.jpg"
        alt="residence"
        className="top-0 left-0 rounded-2xl w-[100%] lg:w-[80%] h-full"
        width={1220}
        height={820}
      />
      {/* <div className="absolute top-0 left-0 w-full h-full">

        <div className="bg-primary rotate-6 rounded-xl  flex items-center justify-center text-white z-20 absolute top-[180px] right-[80px] py-2 px-8">
          Floor 5
        </div>
        <div className="bg-primary rotate-6 rounded-xl  flex items-center justify-center text-white z-20 absolute top-[230px] right-[80px] py-2 px-8">
          Floor 4
        </div>
        <div className="bg-primary rotate-6 rounded-xl  flex items-center justify-center text-white z-20 absolute top-[280px] right-[80px] py-2 px-8">
          Floor 3
        </div>
        <div className="bg-primary rotate-6 rounded-xl  flex items-center justify-center text-white z-20 absolute top-[330px] right-[80px] py-2 px-8">
          Floor 2
        </div>
        <div className="bg-primary rotate-6 rounded-xl  flex items-center justify-center text-white z-20 absolute top-[380px] right-[80px] py-2 px-8">
          Floor 1
        </div>
      </div> */}

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1227 836  "
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
