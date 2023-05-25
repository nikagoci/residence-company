import Material from "@/components/material";
import Residence from "@/components/residence";
import { FilterContextProvider } from "@/context/filterContext";

const ResidencePage = () => {
  return (
    <FilterContextProvider>
      <Residence />
      <Material />
    </FilterContextProvider>
  );
};

export default ResidencePage;
