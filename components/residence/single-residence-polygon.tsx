import Link from "next/link";

type Props = {
  hoveredPolygon: string | null;
  handlePolygonHover: (polygonId: string) => void;
  handlePolygonLeave: () => void;
  points: string;
  id: string;
};

const SingleResidencePolygon = ({
  hoveredPolygon,
  handlePolygonHover,
  handlePolygonLeave,
  points,
  id,
}: Props) => {
  return (
    <Link href={`residence/floor/${id}`} className="relative">
      <polygon
        points={points}
        className={`${
          hoveredPolygon === id
            ? "opacity-30   fill-light_blue stroke-primary stroke-[3px] cursor-pointer"
            : "opacity-0"
        }`}
        onMouseEnter={() => handlePolygonHover(id)}
        onMouseLeave={handlePolygonLeave}
      />
    </Link>
  );
};

export default SingleResidencePolygon;
