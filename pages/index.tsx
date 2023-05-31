import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AboutUs from "@/components/about-us";
import Contact from "@/components/contact";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Contact />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common"])),
      },
    };
  }

  throw new Error("Local not found");
};
