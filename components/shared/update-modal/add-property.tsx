import { PlusCircleIcon } from "@heroicons/react/outline";

type Props = {
    addProperty: (value: keyof FlatInfo) => void
}
type FlatInfo = {
    livingArea: number;
    price: number;
    balconies: number[];
    bedrooms: number[];
    wetPoints: number[];
  };
  

const AddProperty = ({addProperty}: Props) => {
  return (
    <div className="flex items-center justify-around py-6">
      <button type='button' className="btn btn-primary gap-x-3" onClick={() => addProperty('balconies')}>
        Add Balcony <PlusCircleIcon className="w-6 h-auto" />
      </button>
      <button className="btn btn-primary gap-x-3" onClick={() => addProperty('bedrooms')}>
        Add Bedroom <PlusCircleIcon className="w-6 h-auto"  />
      </button>
      <button className="btn btn-primary gap-x-3" onClick={() => addProperty('wetPoints')}>
        Add Wet Point <PlusCircleIcon className="w-6 h-auto"  />
      </button>
    </div>
  );
};

export default AddProperty;
