import { Condition } from "@/fakeData";
import Link from "next/link";

type Props = {
  hoveredPolygon: number | null;
  handlePolygonHover: (polygonId: number) => void;
  handlePolygonLeave: () => void;
  flat: Flat;
};

const SingleFloorPolygon = ({
  hoveredPolygon,
  handlePolygonHover,
  handlePolygonLeave,
  flat,
}: Props) => {
  return (
    <Link
      href={`${
        flat.condition !== Condition.sold
          ? "/"
          : `/residence/floor/${flat.floor}`
      }`}
      className="relative"
    >
        <polygon
          points={flat.points}
          className={`${
            hoveredPolygon === flat.flatNum && flat.condition !== Condition.sold
              ? "opacity-30   fill-blue stroke-[3px] cursor-pointer"
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
        />
    </Link>
  );
};

export default SingleFloorPolygon;
