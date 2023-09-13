"use client";
import React, { useEffect, useState } from "react";
import styles from "./tracking.module.css";
import LazyLoadTable from "@components/operations/LazyLoadTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
// import { MapContainer, TileLayer, useMap,Marker,Popup } from "react-leaflet";

const TrackingPage = () => {
  const tableHeaders_1 = [
    "Zone",
    "Connected Drivers",
    "Free Drivers",
    "Busy Drivers",
    "Total Orders",
    "Running orders",
    "Orders w/out Drivers",
    "Cancelled Orders",
    "B2C orders",
    "Fleet Orders",
    "Flock Orders",
  ];
  const tableHeaders_2 = [
    "Zone",
    "Name",
    "Mobile",
    "Status",
    "Base Money",
    "Total Money",
    "Average",
    "Actions",
  ];
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Simulate loading initial data asynchronously
    setTimeout(() => {
      const initialData = Array.from({ length: 8 }, (_, i) => ({
        zone: `Saudi`,
        connectedDrivers: `5`,
        freeDrivers: `5`,
        busyDrivers: `5`,
        totalOrders: `5`,
        runningOrders: `5`,
        ordersWoutDrivers: `5`,
        cancelledOrders: `5`,
        b2cOrders: `5`,
        fleetOrders: `5`,
        flockOrders: `5`,
      }));
      setData1(initialData);
      console.log(initialData);
    }, 1000);
    setTimeout(() => {
      const initialData = Array.from({ length: 8 }, (_, i) => ({
        zone: `Hive`,
        name: `Ahmed Ali`,
        mobile: `(+971)503406507`,
        status: `Busy`,
        baseMoney: `231.00 Dhrs`,
        totalMoney: `231.00 Dhrs`,
        average: `33.33`,
      }));
      setData2(initialData);
      console.log(initialData);
    }, 1000);
  }, []);

  const fetchMoreData = () => {
    // Simulate loading more data asynchronously
    setTimeout(() => {
      const newData = Array.from({ length: 8 }, (_, i) => ({
        zone: `Saudi`,
        connectedDrivers: `5`,
        freeDrivers: `5`,
        busyDrivers: `5`,
        totalOrders: `5`,
        runningOrders: `5`,
        ordersWoutDrivers: `5`,
        cancelledOrders: `5`,
        b2cOrders: `5`,
        fleetOrders: `5`,
        flockOrders: `5`,
      }));
      setData1([...data1, ...newData]);

      if (data1.length >= 32) {
        setHasMore(false); // Disable loading more data when reaching a certain limit
      }
    }, 1000);
    setTimeout(() => {
      const newData = Array.from({ length: 8 }, (_, i) => ({
        zone: `Hive`,
        name: `Ahmed Ali`,
        mobile: `(+971)503406507`,
        status: `Busy`,
        baseMoney: `231.00 Dhrs`,
        totalMoney: `231.00 Dhrs`,
        average: `33.33`,
      }));
      setData2([...data2, ...newData]);

      if (data2.length >= 100) {
        setHasMore(false); // Disable loading more data when reaching a certain limit
      }
    }, 1000);
  };

  // const position = [51.505, -0.09];
  const [dropdownItem, setDropdownItem] = useState("Project");

  return (
    <div>
      <div className="mt-3" style={{ height: "450px" }}>
        <div className="dropdown-center">
          <button
            className="btn dropdown-toggle px-4 mb-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-offset="0,10"
          >
            {dropdownItem}
          </button>
          <ul className="dropdown-menu" style={{ minWidth: "40px" }}>
            <li>
              <h6 className="dropdown-header p-1 ">Choose project</h6>
            </li>
            <li
              className="dropdown-item p-1 "
              style={{ cursor: "pointer" }}
              onClick={() => setDropdownItem("Tim Hortons")}
            >
              {/* <a className="dropdown-item p-1 " href="#"> */}
              Tim Hortons
              {/* </a> */}
            </li>
            <li
              className="dropdown-item p-1 "
              style={{ cursor: "pointer" }}
              onClick={() => setDropdownItem("Sawani")}
            >
              {/* <a className="dropdown-item p-1 " href="#"> */}
              Sawani
              {/* </a> */}
            </li>
          </ul>
        </div>
        <Image
          src="/assets/images/tracking.png"
          alt="tracking"
          width={2000}
          height={2000}
          style={{ height: "90%" }}
          className="w-100"
        />
      </div>
      <div className={`${styles.main}`}>
        <div className={styles["header-container"]}>
          <h5 className={styles.header}>Tracking Drivers</h5>
          <FontAwesomeIcon className={styles["haeder-icon"]} icon={faRotate} />
        </div>
        <LazyLoadTable
          tableHeaders={tableHeaders_1}
          data={data1}
          hasMore={hasMore}
          fetchMoreData={fetchMoreData}
        />
      </div>
      <div className={`${styles.main}`}>
        <div className={styles["header-container"]}>
          <h5 className={styles.header}>Tracking Drivers</h5>
          <FontAwesomeIcon className={styles["haeder-icon"]} icon={faRotate} />
        </div>
        <LazyLoadTable
          tableHeaders={tableHeaders_2}
          data={data2}
          hasMore={hasMore}
          fetchMoreData={fetchMoreData}
          actions={[{ type: "show" }, { type: "edit" }]}
        />
      </div>
    </div>
  );
};

export default TrackingPage;
