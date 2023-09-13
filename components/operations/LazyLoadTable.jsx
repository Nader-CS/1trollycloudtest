"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import classes from "./LazyLoadTable.module.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../operations/Modal";
import Spinner from "./Spinner";
import { usePathname, useRouter } from "next/navigation";

const LazyLoadTable = (props) => {
  const path = usePathname();
  let arrayOfPath = path.split("/");
  let selectedPath = arrayOfPath[arrayOfPath.length - 1];

  const [isDetailsShown, setIsDetailsShown] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  return (
    <>
      <InfiniteScroll
        dataLength={props.data.length}
        next={props.fetchMoreData}
        hasMore={props.hasMore}
        loader={
          <div className="d-flex justify-content-center">
            <Spinner />
          </div>
        }
        endMessage={
          <div
            class="alert alert-primary w-50 mx-auto text-center"
            role="alert"
          >
            There is no more data to load
          </div>
        }
      >
        <table className={`${classes.table} table-sm`}>
          <thead className={`thead-light ${classes["table-header"]}`}>
            <tr>
              {props.tableHeaders.map((headerName, idx) => {
                if (headerName.toLowerCase() === "name") {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: "left",
                        width: "5rem",
                      }}
                    >
                      {headerName}
                    </th>
                  );
                } else if (headerName.toLowerCase() === "number") {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: "left",
                        width: "3rem",
                      }}
                    >
                      {headerName}
                    </th>
                  );
                } else if (headerName.toLowerCase() === "mobile") {
                  return (
                    <th
                      key={idx}
                      style={{
                        textAlign: "center",
                        width: "7rem",
                      }}
                    >
                      {headerName}
                    </th>
                  );
                } else {
                  return (
                    <th key={idx} style={{ textAlign: "center" }}>
                      {headerName}
                    </th>
                  );
                }
              })}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, idx) => {
              let headers = [];
              let editedData = item;
              for (const i in editedData) {
                headers.push(i);

                if (typeof editedData[i] !== "string") {
                  editedData[i] = toString(editedData[i]);
                }
                if (selectedPath == "drivers") {
                  if (editedData[i].length >= 12) {
                    editedData[i] = editedData[i].substring(0, 13) + "...";
                  }
                }
              }
              console.log(headers);
              return (
                <tr
                  key={idx}
                  className={`${
                    selectedPath == "hiveChills"
                      ? classes.normal
                      : editedData.status?.toLowerCase() === "busy" ||
                        editedData.State?.toLowerCase() === "cancelled"
                      ? classes.red
                      : classes.green
                  }`}
                  style={{ textAlign: "center" }}
                >
                  {/* <td style={{ textAlign: "left", width: "5rem" }}>
                    {editedData.name}
                  </td>
                  <td style={{ width: "7rem" }}>{editedData.mobile}</td>
                  <td>{editedData.zone}</td>
                  <td>{editedData.rating}</td>
                  <td>{editedData.status}</td>
                  <td>{editedData.baseMoney}</td>
                  <td>{editedData.totalMoney}</td>
                  <td>{editedData.company}</td>
                  <td>{editedData.vehicleType}</td> */}
                  {/* get headers name to access object */}
                  {headers.map((header, idx) => {
                    if (header.toLowerCase() == "name") {
                      return (
                        <td
                          key={idx}
                          style={{ textAlign: "left", width: "5rem" }}
                        >
                          {editedData[header]}
                        </td>
                      );
                    } else if (header.toLowerCase() == "number") {
                      return (
                        <td
                          key={idx}
                          style={{ textAlign: "left", width: "3rem" }}
                        >
                          {editedData[header]}
                        </td>
                      );
                    } else if (header.toLowerCase() == "mobile") {
                      return (
                        <td key={idx} style={{ width: "7rem" }}>
                          {editedData[header]}
                        </td>
                      );
                    } else {
                      return <td key={idx}>{editedData[header]}</td>;
                    }
                  })}

                  {/* {path === "/profile/operations/orders" && (
                    <td>
                      <FontAwesomeIcon icon={faPen} cursor="pointer" />
                    </td>
                  )}
                  {(selectedPath === "drivers" ||
                    selectedPath === "hiveChills") && (
                    <td>
                      <FontAwesomeIcon
                        icon={faPen}
                        style={{ marginRight: "0.8rem" }}
                        cursor="pointer"
                      />
                      <FontAwesomeIcon
                        icon={faEye}
                        cursor="pointer"
                        onClick={() => {
                          setIsDetailsShown(true);
                          setSelectedData(item);
                        }}
                      />
                    </td>
                  )} */}
                  <td>
                    {props.actions &&
                      props.actions.map((action, idx) => {
                        if (action.type.toLowerCase() == "show") {
                          return (
                            <FontAwesomeIcon
                              key={idx}
                              icon={faEye}
                              cursor="pointer"
                              style={{ marginRight: "0.8rem" }}
                              onClick={() => {
                                setIsDetailsShown(true);
                                setSelectedData(item);
                              }}
                            />
                          );
                        } else if (action.type.toLowerCase() == "edit") {
                          return (
                            <FontAwesomeIcon
                              key={idx}
                              icon={faPen}
                              cursor="pointer"
                            />
                          );
                        }
                      })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </InfiniteScroll>
      {isDetailsShown && (
        <Modal isModalShown={setIsDetailsShown} data={selectedData} />
      )}
    </>
  );
};

export default LazyLoadTable;
