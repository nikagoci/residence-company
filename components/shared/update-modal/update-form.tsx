import Input from "./input";
type FlatInfo = {
  livingArea: number;
  price: number;
  balconies: number[];
  bedrooms: number[];
  wetPoints: number[];
};

type Props = {
  flatInfo: FlatInfo;
  removeProperty: (value: string, index: number) => void;
};

const UpdateForm = ({ flatInfo, removeProperty }: Props) => {

    console.log(flatInfo)
  return (
    <form>
      <div className="grid grid-cols-2 gap-8 py-6 text-lg font-bold">
        <div className="flex items-center justify-between">
          <label htmlFor="livingArea">Living Area:</label>
          <Input value={flatInfo.livingArea} id="livingArea" />
        </div>

        <div className="flex items-center justify-between">
          <label htmlFor="price">Price</label>
          <Input value={flatInfo.price} id="price" />
        </div>
        {flatInfo.balconies.map((baclony, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <label htmlFor="balcony">Balcony</label>
            <Input
              name="balconies"
              removable={flatInfo.balconies.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={baclony}
              id="balcony"
            />
          </div>
        ))}
        {flatInfo.bedrooms.map((bedroom, idx) => (
          <div key={idx} className="flex items-center justify-between ">
            <label htmlFor={`bedroom${idx}`}>Bedroom</label>
            <Input
              name="bedrooms"
              removable={flatInfo.bedrooms.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={bedroom}
              id={`bedroom${idx}`}
            />
          </div>
        ))}
        {flatInfo.wetPoints.map((wetPoint, idx) => (
          <div key={idx} className="flex items-center justify-between ">
            <label htmlFor={`wetPoint${idx}`}>Wet point</label>
            <Input
              name="wetPoints"
              removable={flatInfo.wetPoints.length > 1}
              index={idx}
              removeProperty={removeProperty}
              value={wetPoint}
              id={`wetPoint${idx}`}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5 sm:mt-6">
        <button
          type="button"
          className="inline-flex justify-center px-6 py-2 text-lg font-medium text-white border border-transparent rounded-md shadow-sm bg-light_purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateForm;
