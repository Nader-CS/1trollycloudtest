"use client";
import React, { useEffect, useState } from "react";
import colors from "@app/common/colors";
import Link from "next/link";
import Image from "next/image";
import styles from "../profile.module.css";
import { useRouter } from "next/navigation";
import "../../../node_modules/react-date-range/dist/styles.css";
import "../../../node_modules/react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { format } from "date-fns";

const OperationsLayout = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState("overview");
  const router = useRouter();
  const [lifeTimeShow, setLifeTimeShow] = useState(false);
  const lifeTimeArr = [
    "Today",
    "Yesterday",
    "This Week",
    "Last Week",
    "This Month",
    "Last Month",
    "Last 3 Months",
    "Last 6 Months",
  ];

  useEffect(() => {
    router.push("/profile/operations/overview");
  }, [router]);
  
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
  return (
    <main className={` ${styles.sideNav}`}>
      <div className="d-flex flex-column">
        <div
          className="d-flex flex-lg-row flex-column align-items-center justify-content-between"
          style={{ marginTop: "100px" }}
        >
          <div className="px-3">
            <h1
              style={{
                color: colors.dark_blue,
                fontWeight: "bold",
              }}
              className={`${styles.largeFont} m-0`}
            >
              Hello, Ahmed
            </h1>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn bg-white"
              type="button"
              onClick={() => setLifeTimeShow(!lifeTimeShow)}
            >
              Life Time
            </button>

            <div className="dropdown-center">
              <button
                className="btn bg-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                Merchant
              </button>
              <ul className="dropdown-menu px-1" style={{ minWidth: "80px" }}>
                <li>
                  <h6 className="dropdown-header ">Type Order</h6>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Curbside
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Takeaway
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown-center">
              <button
                className="btn bg-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                Cause
              </button>
              <ul className="dropdown-menu" style={{ minWidth: "40px" }}>
                <li>
                  <h6 className="dropdown-header p-1 ">Type Order</h6>
                </li>
                <li>
                  <a className="dropdown-item p-1 " href="#">
                    Curbside
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-1 " href="#">
                    Takeaway
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown-center">
              <button
                className="btn bg-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-offset="0,10"
              >
                Channel
              </button>
              <ul className="dropdown-menu" style={{ minWidth: "40px" }}>
                <li>
                  <h6 className="dropdown-header p-2">Country</h6>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    KSA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    Kuwait
                  </a>
                </li>
                <li>
                  <a className="dropdown-item p-2" href="#">
                    Oman
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item p-2"
                    href="#"
                    style={{ whiteSpace: "normal" }}
                  >
                    <p className="p-0 m-0 w-100">
                      Premium Store - Dubai Hills Mall
                    </p>
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown-center">
              <button
                className="btn bg-white dropdown-toggle"
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
          </div>
        </div>
        {lifeTimeShow && (
          <div className="align-self-center d-flex align-items-center gap-3">
            <p className="p-0 m-0 fw-semibold">Life Time:</p>
            {lifeTimeArr.map((title, idx) => (
              <button key={idx} className="btn bg-white fs-6" type="button">
                {title}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={`d-flex flex-lg-row flex-column`}>
        <ul
          className={`d-flex flex-lg-column align-items-lg-start  flex-md-row align-items-md-center  gap-3 mt-lg-5 mt-0 ${styles.sideNavItems} p-0`}
          style={{ listStyleType: "none" }}
        >
          <li className={`nav-item`}>
            <Link
              className={`nav-link  ${
                selectedLink === "overview" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/overview"
              onClick={() => setSelectedLink("overview")}
            >
              Overview
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link
              className={`nav-link  my-lg-2 my-md-0 ${
                selectedLink === "drivers" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/drivers"
              onClick={() => setSelectedLink("drivers")}
            >
              Drivers
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link
              className={`nav-link  ${
                selectedLink === "hiveChills" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/hiveChills"
              onClick={() => setSelectedLink("hiveChills")}
            >
              Hive Chills
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link
              className={`nav-link  ${
                selectedLink === "orders" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/orders"
              onClick={() => setSelectedLink("orders")}
            >
              Orders
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link
              className={`nav-link ${
                selectedLink === "stockRequests" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/stockRequests"
              onClick={() => setSelectedLink("stockRequests")}
            >
              Stock Requests
            </Link>
          </li>
          <li className={`nav-item `}>
            <Link
              className={`nav-link  ${
                selectedLink === "tracking" ? "fw-bold text-black" : ""
              }`}
              style={{ color: "#7B7D7E" }}
              aria-current="page"
              href="/profile/operations/tracking"
              onClick={() => setSelectedLink("tracking")}
            >
              Tracking
            </Link>
          </li>
        </ul>
        {children}
      </div>
    </main>
  );
};

export default OperationsLayout;
