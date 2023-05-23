import { Condition } from "@/fakeData";
import Modal from "../shared/modal";
import { useState } from "react";

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
  const [openModal, setOpenModal] = useState(false)


  const handleModalOpen = () => {
    if(flat.condition !== Condition.sold) {
      setOpenModal(true)
    }
  }

  return (
    <>
    <Modal flat={flat} openModal={openModal} setOpenModal={setOpenModal} />
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
          onClick={handleModalOpen}
        />
    </>

  );
};

export default SingleFloorPolygon;
