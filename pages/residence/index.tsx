import Material from "@/components/material";
import Residence from "@/components/residence";
import { FilterContextProvider } from "@/context/filterContext";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ResidencePage = () => {
  return (
    <FilterContextProvider>
      <Residence />
      <Material />
    </FilterContextProvider>
  );
};

export default ResidencePage;

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