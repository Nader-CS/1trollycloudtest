import colors from "@app/common/colors";
import BarChart from "@components/operations/BarChart";
import BarChartDownload from "@components/operations/BarChartDownload";
import DonutChart from "@components/operations/DonutChart";
import NormalCard from "@components/operations/NormalCard";
import React from "react";

const OverviewPage = () => {
  const data = [
    {
      title: "total orders",
      bigNum: 736000,
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 13068,
        },
        {
          subTitle: "products",
          subTitleNum: 1002453,
        },
      ],
      percent: 6.8,
      flag: "inc",
    },
    {
      title: "active drivers",
      bigNum: 213,
      bigNumTitle: "drivers",
      percent: 6.8,
      flag: "inc",
    },
    {
      title: "successful orders",
      bigNum: 421000,
      bigNumTitle: "orders",
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 336,
        },
        {
          subTitle: "products",
          subTitleNum: 964897,
        },
      ],
      percent: 8.3,
      flag: "inc",
    },
    {
      title: "failed orders",
      bigNum: 198000,
      bigNumTitle: "orders",
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 1068,
        },
        {
          subTitle: "products",
          subTitleNum: 2453,
        },
        {
          subTitle: "canceled",
          subTitleNum: 1453,
        },
        {
          subTitle: "failed",
          subTitleNum: 453,
        },
      ],
      percent: 1.7,
      flag: "dec",
    },
    {
      title: "active zones",
      bigNum: 168,
      bigNumTitle: "zones",
      subTitles: [
        {
          subTitle: "count",
          subTitleNum: 0,
        },
        {
          subTitle: "users",
          subTitleNum: 0,
        },
      ],
      percent: 1.6,
      flag: "dec",
    },
    {
      title: "total drivers",
      bigNum: 4675,
      percentage: [
        {
          per: 68,
          perTitle: "new",
        },
        {
          per: 19,
          perTitle: "returning",
        },
        {
          per: 10,
          perTitle: "inactive",
        },
        {
          per: 3,
          perTitle: "uninstalled",
        },
      ],
    },
    {
      title: "order paid in cash",
      bigNum: 136000,
      bigNumTitle: "orders",
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 336,
        },
        {
          subTitle: "products",
          subTitleNum: 964897,
        },
      ],
      percent: 6.8,
      flag: "inc",
    },
    {
      title: "order paid in credit card",
      bigNum: 334000,
      bigNumTitle: "orders",
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 336,
        },
        {
          subTitle: "products",
          subTitleNum: 964897,
        },
      ],
      percent: 8.3,
      flag: "inc",
    },
    {
      title: "order paid in loyalty points",
      bigNum: 34000,
      bigNumTitle: "orders",
      subTitles: [
        {
          subTitle: "users",
          subTitleNum: 336,
        },
        {
          subTitle: "products",
          subTitleNum: 964879,
        },
      ],
      percent: 8.3,
      flag: "inc",
    },
  ];
  const titles1 = ["Best Performing Zones", "Worst Performing Zones"];
  const titles2 = ["Driver Productivity", "Peak Hour"];


  return (
    <div className="align-self-start flex-grow-1 container px-3">
      <div className="container">
        <div className="row my-3">
          {data?.map((obj, idx) =>
            !obj?.percentage ? (
              <NormalCard key={idx} obj={obj} />
            ) : (
              <DonutChart key={idx} obj={obj} />
            )
          )}
        </div>
        <div className="row my-3">
          {titles1?.map((title, idx) => (
            <div key={idx} className="col-xxl-6 col-lg-6 col-md-12 my-2 ">
              <BarChart title={title} />
            </div>
          ))}
        </div>
        <div className="row my-3">
          {titles2?.map((title, idx) => (
            <div key={idx} className="col-12 my-2">
              <BarChartDownload title={title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
