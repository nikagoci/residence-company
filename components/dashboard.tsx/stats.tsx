import { useTranslation } from "next-i18next";

type Props = {
  demandableFloor: number;
  totalIncome: number;
  flatsSold: number;
};

const Stats = ({ demandableFloor, totalIncome, flatsSold }: Props) => {
  const {t} = useTranslation()

  const stats = [
    { name: t("dashboard.stats.flats-sold"), stat: flatsSold },
    { name: t("dashboard.stats.total-income"), stat: totalIncome },
    { name: t("dashboard.stats.demandable-floor"), stat: demandableFloor },
  ];

  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        {t("dashboard.stats.info")}
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
