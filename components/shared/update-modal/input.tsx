import { XCircleIcon } from "@heroicons/react/outline";

type Props = {
  value: string | number;
  id: string;
  removeProperty?: (value: string, index: number) => void;
  removable?: boolean;
  index?: number
  name?: string;
  register: any
};

const Input = ({ value, id, removeProperty, removable, index, name, register }: Props) => {
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type="text"
        // value={newValue}
        // onChange={(e) => setNewValue(e.target.value)}
        className=" input input-bordered"
        {...register(id)}
      />
      {removable && index !== undefined && name && removeProperty && (
        <div className="absolute -translate-y-1/2 right-4 top-1/2">
          <XCircleIcon
            className="w-5 h-auto text-red-600 cursor-pointer"
            onClick={() => removeProperty(name, index)}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
