type Props = {
  options: number[] | string[];
  id: string;
  changeHandler?: (value: number, id: string) => void;
  register?: any;
};

const Select = ({ options, id, changeHandler, register }: Props) => {
  if (register) {
    return (
      <select
        id={id}
        name={id}
        className="w-full input input-bordered"
        {...register("condition")}
      >
        {options.map((option, idx) => (
          <option value={option} key={idx}>
            {option.toString().charAt(0).toUpperCase() + option.toString().slice(1)}
          </option>
        ))}
      </select>
    );
  }

  if(!changeHandler){
    return <div></div>
  }
  
  return (
    <select
      id={id}
      name={id}
      className="block w-full py-2 pl-3 pr-10 mt-1 text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      onChange={(e) => changeHandler(+e.target.value, id)}
    >
      {options.map((option, idx) => (
        <option value={option} key={idx}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
