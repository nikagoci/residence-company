import Link from "next/link";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("common");

  return (
    <div className="text-white h-screen bg-[url('/images/background.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col flex-wrap items-center justify-center h-full px-4 mx-auto gap-y-12 max-w-7xl sm:px-6 lg:px-8 ">
        <h1 className="text-[90px] font-bold tracking-wider text-center">
          {t("home.hero.title")}
        </h1>
        <p className="text-[40px] font-semibold text-center">
          {t("home.hero.paragraph")}
        </p>
        <Link
          href="/residence"
          className="px-16 py-6 mx-auto my-6 font-bold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg hover:bg-purple bg-light_purple lg:mx-0 hover:underline focus:outline-none focus:shadow-outline hover:scale-105"
        >
          {t("home.hero.button")}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
