import { useTranslation } from "next-i18next";

const TopRow = () => {
  const { t } = useTranslation();
  const filters = [
    t("residence.filter.table.floor"),
    t("residence.filter.table.flat"),
    t("residence.filter.table.area"),
    t("residence.filter.table.bedroom"),
    t("residence.filter.table.price"),
    t("residence.filter.table.see"),
  ];
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
