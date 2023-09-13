"use client";
import React, { useState } from "react";
import styles from "./tracking.module.css";
import LazyLoadTable from "@components/operations/LazyLoadTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
// import { MapContainer, TileLayer, useMap,Marker,Popup } from "react-leaflet";

const TrackingPage = () => {
  // const position = [51.505, -0.09];
 const [dropdownItem,setDropdownItem] = useState('Project')


  return (
    <div>
      <div className="mt-3" style={{height:'450px'}}>
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
                <li className="dropdown-item p-1 " style={{cursor:'pointer'}} onClick={()=>setDropdownItem('Tim Hortons')}>
                  {/* <a className="dropdown-item p-1 " href="#"> */}
                    Tim Hortons
                  {/* </a> */}
                </li>
                <li className="dropdown-item p-1 " style={{cursor:'pointer'}} onClick={()=>setDropdownItem('Sawani')}>
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
         style={{height:'90%'}}
         className="w-100"
        />
      </div>
      <div className={`${styles.main}`}>
        <div className={styles["header-container"]}>
          <h5 className={styles.header}>Tracking Drivers</h5>
          <FontAwesomeIcon className={styles["haeder-icon"]} icon={faRotate} />
        </div>
        <LazyLoadTable />
      </div>
      <div className={`${styles.main}`}>
        <div className={styles["header-container"]}>
          <h5 className={styles.header}>Tracking Drivers</h5>
          <FontAwesomeIcon className={styles["haeder-icon"]} icon={faRotate} />
        </div>
        <LazyLoadTable />
      </div>
    </div>
  );
};

export default TrackingPage;
