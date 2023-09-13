"use client";
import React, { useEffect, useState } from "react";
import colors from "@app/common/colors";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ obj }) => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [colors, setColors] = useState([]);
  const [coloredPer, setColoredPer] = useState([]);

  const data = {
    // labels: [...labels],
    datasets: [
      {
        label: "# of Drivers",
        data: [...values],
        backgroundColor: [...colors],
      },
    ],
  };

  useEffect(() => {
    setColors(["#ADDEF4", "#60A3C1", "#143C4E", "#02131A"]);
    const Colored = obj?.percentage.map((item, index) => {
      if (index < colors?.length) {
        item.color = colors[index];
      }
      return item;
    });
    setColoredPer([...Colored]);
    console.log(coloredPer);

    let labels = obj?.percentage.map((item) => item.perTitle);
    let values = obj?.percentage.map((item) => item.per);

    setLabels([...labels]);
    setValues([...values]);
  }, [obj]);

  const options = {
    responsive: true,
    radius: "100%",
    cutout: "55%",
  };

  return (
    <div className="col-xxl-4 col-lg-6 col-md-12 my-2 ">
      <div className="d-flex bg-white rounded-3 p-4 justify-content-between">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="fw-semibold p-0 m-0">
              {obj?.title
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
          </div>
          <div
            className={`d-flex align-items-end gap-3`}
            // style={
            //   !obj?.subTitles && { margin:"40px 0 40px 0" }
            // }
          >
            <p className="p-0 m-0 my-3 py-1 display-5 fw-semibold">
              {obj?.bigNum >= 1000
                ? obj?.bigNum >= 1000000
                  ? obj?.bigNum / 1000000 + "M"
                  : obj?.bigNum / 1000 + "K"
                : obj?.bigNum}
            </p>
            <p className="p-0 m-0 fw-bold pb-3">{obj?.bigNumTitle}</p>
          </div>
          <div>
            {coloredPer.map((item, idx) => (
              <div key={idx} className="d-flex align-items-center gap-2 my-1">
                <div
                  className="rounded-4"
                  style={{
                    backgroundColor: `${item.color}`,
                    width: "20px",
                    height: "13px",
                  }}
                ></div>
                <p className="p-0 m-0">{item.per} %</p>
                <p className="p-0 m-0">
                  {item.perTitle.charAt(0).toUpperCase() +
                    item.perTitle.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="align-self-end">
          {data && (
            <Doughnut
              data={data}
              options={options}
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
