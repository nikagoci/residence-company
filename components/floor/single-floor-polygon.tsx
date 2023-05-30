import { Condition } from "@/fakeData";
import { useSession } from "next-auth/react";
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
  const { status } = useSession()
  const { push } = useRouter()

  const handlePageChange = () => {
      if(status === 'unauthenticated' && flat.condition !== Condition.sold){
        push({
          pathname: `/residence/floor/${flat.floor}`,
          query: {flat: flat.flatNum}
        })
      } else if(status === 'authenticated'){
        push({
          pathname: `/residence/floor/update/${flat.floor}`,
          query: {flat: flat.flatNum}
        })
      }
  }

  return (
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
  );
};

export default SingleFloorPolygon;
