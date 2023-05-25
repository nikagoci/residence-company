type Props = {
  options: number[]
}

const Select = ({options} : Props) => {
  return (
      <select
        id="location"
        name="location"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        {options.map((option, idx) => (
          <option value={option} key={idx}>{option}</option>
        ))}
      </select>
  );
};

export default Select;
