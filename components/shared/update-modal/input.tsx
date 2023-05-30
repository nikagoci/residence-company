import { XCircleIcon } from "@heroicons/react/outline";
import {
  FieldValues,
  DeepMap,
  FieldError,
  UseFormRegister,
} from "react-hook-form";

type Props = {
  value: string | number;
  id: string;
  removeProperty?: (value: string, index: number) => void;
  removable?: boolean;
  index?: number;
  name?: string;
  register: UseFormRegister<FieldValues>;
  error: DeepMap<FieldValues, FieldError> | undefined;
};

const Input = ({
  value,
  id,
  removeProperty,
  removable,
  index,
  name,
  register,
  error,
}: Props) => {
  return (
      <div>
        <div className="relative">
          <input
            id={id}
            type="text"
            placeholder={`${value}`}
            className={`${
              error && "border-red-500"
            } border input input-bordered`}
            {...register(id, { valueAsNumber: true })}
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
        {error && <p className="max-w-[90%] text-red-500 absolute mt-2 text-xs ">{error.message}</p>}
      </div>
  );
};

export default Input;
