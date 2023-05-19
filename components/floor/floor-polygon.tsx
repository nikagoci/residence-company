import { useEffect, useState } from "react";
import SingleFloorPolygon from "./single-floor-polygon";

const POLYGONS = [
  {
    id: "1",
    points: "8,194,186,190,183,428,262,429,263,472,275,472,270,716,7,716",
  },
  {
    id: "2",
    points: "188,193,361,194,359,429,183,428",
  },
  {
    id: "3",
    points: "361,194,608,192,607,427,361,428",
  },
  {
    id: "4",
    points: "607,191,863,191,867,428,607,428",
  },
  {
    id: "5",
    points:
      "866,191,1214,192,1214,448,1106,450,1103,407,1106,492,1046,490,1047,411,993,409,994,428,869,428,869,427",
  },
  {
    id: "6",
    points:
      "1213,448,1211,721,948,721,948,429,994,427,993,410,1043,408,1049,488,1101,492,1102,450",
  },
  {
    id: "7",
    points: "359,478,351,723,612,725,614,479",
  },
  {
    id: "8",
    points: "614,476,800,476,798,551,861,551,861,655,786,656,784,717,613,722",
  },
];

type Props = {
  floorNum: string;
};

const ResidencePolygon = ({ floorNum }: Props) => {
  const [hoveredPolygon, setHoveredPolygon] = useState<string | null>(null);
  const [floorPolygons, setFloorPolygons] = useState(POLYGONS);

  const handlePolygonHover = (polygonId: string) => {
    setHoveredPolygon(polygonId);
  };

  const handlePolygonLeave = () => {
    setHoveredPolygon(null);
  };

  useEffect(() => {
    if (floorNum) {
      setFloorPolygons((prev) =>
        prev.map((polygon) => {
          return {
            id: String((+floorNum - 1) * POLYGONS.length + +polygon.id),
            points: polygon.points,
          };
        })
      );
    }
  }, [floorNum]);

  return (
    <svg width="80%" height="100%" viewBox="0 0 1120 639">
      <image href="/images/floor.jpg" />
      {floorPolygons.map((polygon) => (
        <SingleFloorPolygon
          handlePolygonHover={handlePolygonHover}
          handlePolygonLeave={handlePolygonLeave}
          hoveredPolygon={hoveredPolygon}
          points={polygon.points}
          id={polygon.id}
          key={polygon.id}
        />
      ))}
    </svg>
  );
};

export default ResidencePolygon;
