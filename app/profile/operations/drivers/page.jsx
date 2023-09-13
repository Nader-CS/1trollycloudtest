"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import LazyLoadTable from "@components/operations/LazyLoadTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const DriversPage = () => {
  const tableHeaders = [
    "Name",
    "Mobile",
    "Zone",
    "Rating",
    "Status",
    "Base Money",
    "Total Money",
    "Company",
    "Vehicle Type",
    "Actions",
  ];
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Simulate loading initial data asynchronously
    setTimeout(() => {
      const initialData = Array.from({ length: 20 }, (_, i) => ({
        name: `Nader`,
        mobile: `(+971)56465546844849`,
        zone: `Hive`,
        rating: `7.5`,
        status: `Busy`,
        baseMoney: `231.00 Dhrs`,
        totalMoney: `231.00 Dhrs`,
        company: `Hend's company`,
        vehicleType: `231.00 Dhrs`,
      }));
      setData(initialData);
      console.log(initialData);
    }, 1000);
  }, []);

  const fetchMoreData = () => {
    // Simulate loading more data asynchronously
    setTimeout(() => {
      const newData = Array.from({ length: 20 }, (_, i) => ({
        name: `Naderaaaaaaaawqfwega`,
        mobile: `(+971)56465546844849`,
        zone: `Hive`,
        rating: `7.5`,
        status: `Free`,
        baseMoney: `231.00 Dhrs`,
        totalMoney: `231.00 Dhrs`,
        company: `Hend's company`,
        vehicleType: `231.00 Dhrs`,
      }));
      setData([...data, ...newData]);

      if (data.length >= 100) {
        setHasMore(false); // Disable loading more data when reaching a certain limit
      }
    }, 1000);
  };

  return (
    <div className={`${styles.main}`}>
      <div className={styles["header-container"]}>
        <h5 className={styles.header}>Drivers</h5>
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
  );
};

export default DriversPage;
