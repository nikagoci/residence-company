import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTranslation } from "next-i18next";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  soldFlatsByFloor: {
    floor: number;
    _count: {
      _all: number;
    };
  }[];
};

const Chart = ({ soldFlatsByFloor }: Props) => {
  const { t } = useTranslation();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: t("dashboard.chart.total"),
      },
    },
  };

  const labels = [
    {
      floor: `${soldFlatsByFloor[0].floor}${t("dashboard.chart.1-floor")}`,
      totalFlats: "8",
      soldFlats: `${soldFlatsByFloor[0]._count._all}`,
    },
    {
      floor: `${soldFlatsByFloor[1].floor}${t("dashboard.chart.2-floor")}`,
      totalFlats: "8",
      soldFlats: `${soldFlatsByFloor[1]._count._all}`,
    },
    {
      floor: `${soldFlatsByFloor[2].floor}${t("dashboard.chart.3-floor")}`,
      totalFlats: "8",
      soldFlats: `${soldFlatsByFloor[2]._count._all}`,
    },
    {
      floor: `${soldFlatsByFloor[3].floor}${t("dashboard.chart.4-floor")}`,
      totalFlats: "8",
      soldFlats: `${soldFlatsByFloor[3]._count._all}`,
    },
    {
      floor: `${soldFlatsByFloor[4].floor}${t("dashboard.chart.5-floor")}`,
      totalFlats: "8",
      soldFlats: `${soldFlatsByFloor[4]._count._all}`,
    },
  ];

  const data = {
    labels: labels.map((label) => label.floor),
    datasets: [
      {
        label: t("dashboard.chart.sold-flats"),
        data: labels.map((label) => label.soldFlats),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: t("dashboard.chart.total-flats"),
        data: labels.map((label) => label.totalFlats),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return <Bar className="gap-y-4" options={options} data={data} />;
};

export default Chart;
