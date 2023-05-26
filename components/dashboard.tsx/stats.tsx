type Props = {
  demandableFloor: number;
  totalIncome: number;
  flatsSold: number;
};

const Stats = ({ demandableFloor, totalIncome, flatsSold }: Props) => {
  const stats = [
    { name: "Flats Sold", stat: flatsSold },
    { name: "Total Income", stat: totalIncome },
    { name: "Demandable Floor", stat: demandableFloor },
  ];
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="grid grid-cols-1 mt-5 overflow-hidden bg-white divide-y divide-gray-200 rounded-lg shadow md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item, idx) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {idx === 1 ? `${item.stat}$` : item.stat}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
