import Image from "next/image";

import { useTranslation } from "next-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-[#f8f8f8]" id="about">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col md:items-center gap-y-8 md:flex-row md:gap-x-16">
          <div className="relative flex flex-col basis-1/2 gap-y-6 md:gap-y-10">
            <h3 className="text-2xl font-bold uppercase before:content-[''] before:absolute before:-top-6 before:left-0 before:w-16 before:h-[2px] before:bg-primary">
              {t("home.about.title")}
            </h3>
            <p className="text-xl tracking-wider">{t("home.about.header")}</p>
            <p className="text-[#888]">{t("home.about.paragraph")}</p>
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
