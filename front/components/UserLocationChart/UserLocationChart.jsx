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
import styles from "./UserLocationChart.module.css";
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
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
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
    <div className={styles.root}>
      <h2>User location chat</h2>
      <Bar options={options} data={chartData} />
    </div>
  );
};
