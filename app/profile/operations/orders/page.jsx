"use client";
import LazyLoadTable from "@components/operations/LazyLoadTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const OrdersPage = () => {
  const tableHeaders = [
    "Number",
    "CompletedAt",
    "Risky",
    "State",
    "paymentState",
    "ShipmentState",
    "Email",
    "Total",
    "Actions",
  ];
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // Simulate loading initial data asynchronously
    setTimeout(() => {
      const initialData = Array.from({ length: 20 }, (_, i) => ({
        Number: `R1234567890`,
        CompletedAt: `03.05.2023 14:30PM UTC`,
        Risky: `Safe`,
        State: `cancelled`,
        paymentState: `Void`,
        ShipmentState: `Backorder`,
        Email: `hend.elnokaly@gmail.com`,
        Total: `231.00 Dhrs`,
      }));
      setData(initialData);
      console.log(initialData);
    }, 1000);
  }, []);

  const fetchMoreData = () => {
    // Simulate loading more data asynchronously
    setTimeout(() => {
      const newData = Array.from({ length: 20 }, (_, i) => ({
        Number: `R1234567890`,
        CompletedAt: `03.05.2023 14:30PM UTC`,
        Risky: `Safe`,
        State: `resumed`,
        paymentState: `Void`,
        ShipmentState: `Backorder`,
        Email: `hend.elnokaly@gmail.com`,
        Total: `231.00 Dhrs`,
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
        <h5 className={styles.header}>Orders</h5>
        <FontAwesomeIcon className={styles["haeder-icon"]} icon={faRotate} />
      </div>
      <LazyLoadTable
        tableHeaders={tableHeaders}
        data={data}
        hasMore={hasMore}
        fetchMoreData={fetchMoreData}
      />
    </div>
  );
};

export default OrdersPage;
