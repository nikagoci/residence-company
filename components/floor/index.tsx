import FloorPolygon from "./floor-polygon";

type Props = {
  floorNum: string
}

const Floor = ({floorNum}: Props) => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center">
        <div className="relative flex justify-center w-full h-full mt-10">
          <FloorPolygon floorNum={floorNum} />
        </div>
      </div>
    </section>
  );
};

export default Floor;
