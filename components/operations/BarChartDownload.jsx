"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import "../../node_modules/react-date-range/dist/styles.css";
import "../../node_modules/react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";
import Image from "next/image";
import { faDownload, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BarChartDownload = ({ title }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const ref = useRef(null);
  const [selectionRange, setSelectionRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    const { selection } = ranges;
    setSelectionRange([selection]);
    console.log(selectionRange);
  };
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

  const downloadImage = useCallback(() => {
    const link = document.createElement("a");
    link.href = ref.current.toBase64Image();
    link.download = "chart.png";
    link.click();
    console.log(link);
  }, []);

  const labels = [
    "Mohamed Ali",
    "Ahmed Abdelramhan",
    "Mohmoud Ahmed",
    "Mohmoud Ahmed",
    "Mohamed abdelrahman",
    "Youssef Aboulfottouh",
  ];
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
        label: "Yesterday",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#60A3C1",
        barThickness: 20,
      },
      {
        label: "Avg. Week",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#ADDEF4",
        barThickness: 20,
      },
    ],
  };

  const labels2 = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
  ];
  return (
    <div className="d-flex flex-column bg-white rounded-3 p-4">
      <div className="d-flex justify-content-between align-items-center">
        <p className="fw-semibold p-0 m-0">{title}</p>
        <div className="d-flex gap-2">
          <div className="dropdown-center">
            <button
              className="btn dropdown-toggle"
              style={{ backgroundColor: "#F8F8F8" }}
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

          <div className="dropdown-center">
            <button
              className="btn dropdown-toggle"
              style={{ backgroundColor: "#F8F8F8" }}
              type="button"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
              data-bs-offset="0,10"
            >
              <Image
                src="/assets/images/calendar.svg"
                alt="calendar"
                width={15}
                height={15}
                className="mx-1"
              />
              {format(selectionRange[0]?.startDate, "dd.MM.yyyy")}
              {" - "}
              {selectionRange[0]?.endDate &&
                format(selectionRange[0]?.endDate, "dd.MM.yyyy")}
            </button>
            <ul className="dropdown-menu px-1" style={{ minWidth: "80px" }}>
              <li>
                <DateRangePicker
                  ranges={selectionRange}
                  onChange={handleSelect}
                  showSelectionPreview={true}
                />
              </li>
            </ul>
          </div>
          <button onClick={downloadImage} className="nav-link">
            <FontAwesomeIcon
              icon={faDownload}
              style={{ width: "20px", height: "20px" }}
            />
          </button>
          <button className="nav-link">
            <FontAwesomeIcon
              icon={faRefresh}
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
      </div>
      <div style={{ width: "100%", height: "300px" }}>
        <Bar
          ref={ref}
          options={options}
          data={data}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default BarChartDownload;
