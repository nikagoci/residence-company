import { Condition } from "@/fakeData";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

type Props = {
  hoveredPolygon: number | null;
  handlePolygonHover: (polygonId: number) => void;
  handlePolygonLeave: () => void;
  flat: Flat;
};

const textPoints = [
  { x: 100, y: 500 },
  { x: 240, y: 320 },
  { x: 440, y: 320 },
  { x: 700, y: 320 },
  { x: 1000, y: 320 },
  { x: 440, y: 580 },
  { x: 690, y: 580 },
];

const SingleFloorPolygon = ({
  hoveredPolygon,
  handlePolygonHover,
  handlePolygonLeave,
  flat,
}: Props) => {
  const { status } = useSession();
  const { push } = useRouter();

  const handlePageChange = () => {
    if (status === "unauthenticated" && flat.condition !== Condition.sold) {
      push({
        pathname: `/residence/floor/${flat.floor}`,
        query: { flat: flat.flatNum },
      });
    } else if (status === "authenticated") {
      push({
        pathname: `/residence/floor/update/${flat.floor}`,
        query: { flat: flat.flatNum },
      });
    }
  };

  const textPoints = [
    { x: 100, y: 500, flats: [1, 9, 17, 25, 33] },
    { x: 240, y: 320, flats: [2, 10, 18, 26, 34] },
    { x: 440, y: 320, flats: [3, 11, 19, 27, 35] },
    { x: 700, y: 320, flats: [4, 12, 20, 28, 36] },
    { x: 1000, y: 320, flats: [5, 13, 21, 29, 37] },
    { x: 1040, y: 580, flats: [6, 14, 22, 30, 38] },
    { x: 440, y: 600, flats: [7, 15, 23, 31, 39] },
    { x: 690, y: 600, flats: [8, 16, 24, 32, 40] },
  ];

  return (
    <g>
      <polygon
        points={flat.points}
        className={`${
          hoveredPolygon === flat.flatNum && flat.condition !== Condition.sold
            ? "opacity-30   fill-primary stroke-[3px] cursor-pointer"
            : "opacity-0 "
        }
        ${
          flat.condition === Condition.sold
            ? "opacity-50 cursor-default"
            : "opacity-0"
        }
        `}
        onMouseEnter={() => handlePolygonHover(flat.flatNum)}
        onMouseLeave={handlePolygonLeave}
        onClick={handlePageChange}
      />
      {flat.condition === Condition.sold &&
        textPoints.map((textPoint, idx) => {
          if (textPoint.flats.includes(flat.flatNum)) {
            return (
              <text
                x={textPoint.x}
                y={textPoint.y}
                className="text-4xl font-bold fill-red-500"
              >
                SOLD
              </text>
            );
          }
        })}
    </g>
  );
};

export default SingleFloorPolygon;
