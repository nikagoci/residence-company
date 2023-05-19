import ImageMap from "./image-map";

const Residence = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-[400] text-black">Choose Your House</h1>
        <div className="relative flex justify-center w-full h-full mt-10">
          <ImageMap />
        </div>
      </div>
    </section>
  );
};

export default Residence;
