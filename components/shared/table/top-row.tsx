const filters = [
  "Floor", "Flat", "Area", "Bedroom", "Price", "See"
]

const TopRow = () => {
  return (
    <tr className="w-full">
      {filters.map((filter, idx) => (
        <th className="px-6 py-3 text-sm font-bold text-center sm:px-9 md:px-16 lg:px-20 " key={idx}> 
          {filter}
        </th>
      ))}
    </tr>
  );
};

export default TopRow;
