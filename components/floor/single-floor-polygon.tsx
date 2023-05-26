import { Condition } from "@/fakeData";
import Modal from "../shared/modal";
import { useState } from "react";
import { useRouter } from "next/router";

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
  const { push } = useRouter()

  const handlePageChange = () => {
    if(flat.condition !== Condition.sold) {
      push({
        pathname: `/residence/floor/${flat.floor}`,
        query: {flat: flat.flatNum}
      })
    }
  }

  return (
    <>
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
        onClick={handlePageChange}
      />
    </>
  );
};

export default SingleFloorPolygon;
