"use client";
import React from "react";
import colors from "@app/common/colors";
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
import { faker } from "@faker-js/faker";

const BarChart = ({ title }) => {
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
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const labels = ["Al Fayha’a", "Mishrifah", "An Nassem"];

  const data = {
    labels,
    datasets: [
      {
        label: "Today",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#143C4E",
        barThickness: 20,
      },
      {
        label: "Burnt",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#60A3C1",
        barThickness: 20,
      },
      {
        label: "Expired",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#ADDEF4",
        barThickness: 20,
      },
    ],
  };
  

  return (
      <div className="d-flex flex-column bg-white rounded-3 p-4">
        <div className="d-flex justify-content-between align-items-center">
          <p className="fw-semibold p-0 m-0">{title}</p>
          <div className="dropdown-center">
              <button
                className="btn dropdown-toggle"
                style={{backgroundColor:'#F8F8F8'}}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                Date
              </button>
              <ul className="dropdown-menu" style={{ minWidth: "40px" }}>
                <li>
                  <h6 className="dropdown-header p-2">Choose date</h6>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    today
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    this week
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    this month
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div style={{width:'100%',height:'300px'}}>
          <Bar options={options} data={data} style={{width:'100%'}} />
        </div>
      </div>
  );
};

export default BarChart;