import React from "react";
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
import { getRandomColors } from "../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "User Country List",
    },
  },
};

// Country list should be in the format of
// {
//     countryName: number,
//     countryName: number,
// }

export const UserLocationChart = ({ countryList }) => {
  const chartData = {
    labels: Object.keys(countryList),
    datasets: [
      {
        label: "Users: ",
        data: Object.values(countryList),
        backgroundColor: () => getRandomColors(Object.keys(countryList).length),
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={chartData} />;
    </div>
  );
};
