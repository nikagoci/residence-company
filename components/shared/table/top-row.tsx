const filters = [
  "Floor", "Flat", "Area", "Bedroom", "Price", "See"
]

const TopRow = () => {
  return (
    <tr>
      {filters.map((filter, idx) => (
        <th className="px-6 py-3 text-sm font-bold text-center " key={idx}> 
          {filter}
        </th>
      ))}
    </tr>
  );
};

export default TopRow;
