import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Total Flats Sold",
    },
  },
};

const labels = [
  {
    floor: "1 Floor",
    totalFlats: 8,
    soldFlats: 5,
  },
  {
    floor: "2 Floor",
    totalFlats: 8,
    soldFlats: 5,
  },
  {
    floor: "3 Floor",
    totalFlats: 8,
    soldFlats: 3,
  },
  {
    floor: "4 Floor",
    totalFlats: 8,
    soldFlats: 7,
  },
  {
    floor: "5 Floor",
    totalFlats: 8,
    soldFlats: 2,
  },
];

const data = {
  labels: labels.map((label) => label.floor),
  datasets: [
    {
        label: "Sold Flats",
        data: labels.map((label) => label.soldFlats),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    {
      label: "Total Flats",
      data: labels.map((label) => label.totalFlats),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    
  ],
};

const Chart = () => {
  return <Bar options={options} data={data} />;
};

export default Chart;
