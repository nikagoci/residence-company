const Select = () => {
  return (
      <select
        id="location"
        name="location"
        className="block w-full py-2 pl-3 pr-10 mt-1 text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        defaultValue="Canada"
      >
        <option>USA</option>
        <option>Canada</option>
        <option>EU</option>
      </select>
  );
};

export default Select;
