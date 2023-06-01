import { PlusCircleIcon } from "@heroicons/react/outline";
import { useTranslation } from "next-i18next";

type Props = {
  addProperty: (value: keyof FlatInfo) => void;
};
type FlatInfo = {
  livingArea: number;
  price: number;
  balconies: number[];
  bedrooms: number[];
  wetPoints: number[];
};

const AddProperty = ({ addProperty }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-around py-6">
      <button
        type="button"
        className="btn btn-primary gap-x-3"
        onClick={() => addProperty("balconies")}
      >
        {t("floor.update-modal.add-balcony")} <PlusCircleIcon className="w-6 h-auto" />
      </button>
      <button
        className="btn btn-primary gap-x-3"
        onClick={() => addProperty("bedrooms")}
      >
        {t("floor.update-modal.add-bedroom")} <PlusCircleIcon className="w-6 h-auto" />
      </button>
      <button
        className="btn btn-primary gap-x-3"
        onClick={() => addProperty("wetPoints")}
      >
        {t("floor.update-modal.add-wetpoint")} <PlusCircleIcon className="w-6 h-auto" />
      </button>
    </div>
  );
};

export default AddProperty;
