import React, { useState } from "react";
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
import { useTranslations } from "../../hooks/useTranslations";
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
  const { t } = useTranslations();
  const [toggle, setToggle] = useState(false);
  const chartData = {
    labels: Object.keys(countryList),
    datasets: [
      {
        label: t.chartUserCountryLabel,
        data: Object.values(countryList),
        backgroundColor: () => getRandomColors(Object.keys(countryList).length),
      },
    ],
  };

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Show countries</button>
      {toggle && (
        <div className={styles.root}>
          <h2>{t.chartUserCountryLabel}</h2>
          <Bar options={options} data={chartData} />
        </div>
      )}
    </>
  );
};

export const UserIslandChart = ({ islandList }) => {
  const { t } = useTranslations();
  const [toggle, setToggle] = useState(false);
  const chartData = {
    labels: Object.keys(islandList),
    datasets: [
      {
        label: t.chartUserIslandLabel,
        data: Object.values(islandList),
        backgroundColor: () => getRandomColors(Object.keys(islandList).length),
      },
    ],
  };

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Show island stats</button>
      {toggle && (
        <div className={styles.root}>
          <h2>{t.chartUserIslandLabel}</h2>
          <Bar options={options} data={chartData} />
        </div>
      )}
    </>
  );
};
export const UserDimotikiEnotitaList = ({ dimotikiEnotitaList }) => {
  const { t } = useTranslations();
  const [toggle, setToggle] = useState(false);
  const chartData = {
    labels: Object.keys(dimotikiEnotitaList),
    datasets: [
      {
        label: t.chartUserDimotikiEnotitaLabel,
        data: Object.values(dimotikiEnotitaList),
        backgroundColor: () =>
          getRandomColors(Object.keys(dimotikiEnotitaList).length),
      },
    ],
  };

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>
        Show municipality stats{" "}
      </button>
      {toggle && (
        <div className={styles.root}>
          <h2>{t.chartUserDimotikiEnotitaLabel}</h2>
          <Bar options={options} data={chartData} />
        </div>
      )}
    </>
  );
};
