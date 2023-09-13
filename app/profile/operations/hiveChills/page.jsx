"use client";
import React, { useEffect, useState } from "react";
import styles from "./hiveChill.module.css";
import LazyLoadTable from "@components/operations/LazyLoadTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
// import { MapContainer, TileLayer, useMap,Marker,Popup } from "react-leaflet";

const HiveChillsPage = () => {
  const tableHeaders = [
    "Zone",
    "Name",
    "Working zone",
    "Status",
    "Shock detection",
    "Temprature",
    "Battery Life",
    "Actions",
  ];
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Simulate loading initial data asynchronously
    setTimeout(() => {
      const initialData = Array.from({ length: 20 }, (_, i) => ({
        zone: `Hive`,
        Name: `Truck 1`,
        workingZone: `Al Fayha'a`,
        status: `On route`,
        shockDetection: `None`,
        temprature: `2.5C`,
        batteryLife: `10%`,
      }));
      setData(initialData);
      console.log(initialData);
    }, 1000);
  }, []);

  const fetchMoreData = () => {
    // Simulate loading more data asynchronously
    setTimeout(() => {
      const newData = Array.from({ length: 20 }, (_, i) => ({
        zone: `Hive`,
        Name: `Truck 1`,
        workingZone: `Al Fayha'a`,
        status: `On route`,
        shockDetection: `None`,
        temprature: `2.5C`,
        batteryLife: `10%`,
      }));
      setData([...data, ...newData]);

      if (data.length >= 100) {
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
          src="/assets/images/hiveChillMap.png"
          alt="hiveChillMap"
          width={2000}
          height={400}
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
          tableHeaders={tableHeaders}
          data={data}
          hasMore={hasMore}
          fetchMoreData={fetchMoreData}
          actions={[{ type: "show" }, { type: "edit" }]}
        />
      </div>
    </div>
  );
};

export default HiveChillsPage;
