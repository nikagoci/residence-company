import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-32 bg-[#f8f8f8]" id="about">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:items-center gap-y-8 md:flex-row md:gap-x-16">
          <div className="relative flex flex-col basis-1/2 gap-y-6 md:gap-y-10">
            <h3 className="text-2xl font-bold uppercase before:content-[''] before:absolute before:-top-6 before:left-0 before:w-16 before:h-[2px] before:bg-primary">
              Our History
            </h3>
            <p className="text-xl tracking-wider">
              OUR CONSTRUCTION COMPANY HAS BEEN FOUNDED 10 YEARS AGO, AT THE
              VERY PEAK OF THE BUILDING FRENZY IN THE US...
            </p>
            <p className="text-[#888]">
              Since then we've built hundreds of commercial, government and
              private buildings and facilities. It may not sound like a lot, but
              if you estimate the manpower, working hours, materials, planning
              and correlating that were all involved in completing each separate
              project, then our productivity is immense!
            </p>
          </div>
          <div className="basis-1/2">
            <Image
              src="/images/about.jpg"
              className="w-full h-full"
              alt="crew"
              height={665}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
