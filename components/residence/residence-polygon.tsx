import { useState } from "react";
import SingleResidencePolygon from "./single-residence-polygon";

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
    <svg width="60%" height="100%" viewBox="0 0 1120 639">
         <image href="images/residence.jpg"  />
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
  );
};

export default ResidencePolygon;
