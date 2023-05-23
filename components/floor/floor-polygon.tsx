import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

import SingleFloorPolygon from "./single-floor-polygon";
import FLATS from "@/fakeData";
import { useRouter } from "next/router";
import Link from "next/link";
// const POLYGONS = [
//   {
//     id: "1",
//     points: "8,194,186,190,183,428,262,429,263,472,275,472,270,716,7,716",
//   },
//   {
//     id: "2",
//     points: "188,193,361,194,359,429,183,428",
//   },
//   {
//     id: "3",
//     points: "361,194,608,192,607,427,361,428",
//   },
//   {
//     id: "4",
//     points: "607,191,863,191,867,428,607,428",
//   },
//   {
//     id: "5",
//     points:
//       "866,191,1214,192,1214,448,1106,450,1103,407,1106,492,1046,490,1047,411,993,409,994,428,869,428,869,427",
//   },
//   {
//     id: "6",
//     points:
//       "1213,448,1211,721,948,721,948,429,994,427,993,410,1043,408,1049,488,1101,492,1102,450",
//   },
//   {
//     id: "7",
//     points: "359,478,351,723,612,725,614,479",
//   },
//   {
//     id: "8",
//     points: "614,476,800,476,798,551,861,551,861,655,786,656,784,717,613,722",
//   },
// ];

type Props = {
  floorNum: string;
};

const ResidencePolygon = ({ floorNum }: Props) => {
  const [hoveredPolygon, setHoveredPolygon] = useState<number | null>(null);
  const [flatInfo, setFlatInfo] = useState<Flat[]>([]);
  const [totalArea, setTotalArea] = useState(0);
  const [disableButton, setDisableButton] = useState('')

  const router= useRouter()

  useEffect(() => {
    if (floorNum) {
      const flats = FLATS.filter((flat) => flat.floor === +floorNum);

      setFlatInfo(flats);
    }

    if(floorNum && +floorNum === 1) {
      setDisableButton('first')
    } else if(floorNum && +floorNum === 5) {
      setDisableButton('second')
    } else {
      setDisableButton('')
    }


  }, [floorNum]);

  useEffect(() => {
    if (hoveredPolygon) {
      const flat = flatInfo.find(
        (flat) => flat.flatNum === hoveredPolygon
      ) as Flat;

      let balconyArea = 0;

      flat?.balconies.forEach((balcony) => {
        balconyArea += balcony;
      });

      setTotalArea(balconyArea + flat?.livingArea);
    }
  }, [hoveredPolygon]);

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
          <div className="absolute right-0 px-6 py-2 text-xs font-bold text-white lg:top-14 xl:top-24 top-4 sm:text-sm bg-blue rounded-xl ">
            <h3>Flat: {hoveredPolygon}</h3>
            <h3>Area: {totalArea.toFixed(1)} sq.m</h3>
          </div>
        )}
        <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full gap-y-6">
            <h3 className="text-3xl font-bold text-primary">Floor {floorNum}</h3>
            <div className="flex gap-x-4">
              <Link
                href={`/residence/floor/${+floorNum - 1}`}
                className={`${disableButton === 'first' ? 'bg-light_blue pointer-events-none' : 'bg-blue active:scale-110'} p-4 text-white transition duration-300 rounded-full `}
                // onClick={handleFloorDecrease}
                // disabled={disableButton === 'first'}
              >
                <ArrowLeftIcon className="w-4" />
              </Link>
              <Link
                href={`/residence/floor/${+floorNum + 1}`}
                className={`${disableButton === 'second' ? 'bg-light_blue pointer-events-none' : 'bg-blue active:scale-110'} p-4 text-white transition duration-300 rounded-full `}
                // onClick={handleFloorIncrease}
                // disabled={disableButton === 'second'}
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
        {flatInfo.map((flat) => (
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

export default ResidencePolygon;
