import colors from "@app/common/colors";
import styles from "./csr.module.css";
import React from "react";

const csrLayout = ({ children }) => {
  return (
    <>
          <div
        className={`${styles.backGround} p-5`}>
        <div className="d-flex flex-column align-items-start" style={{marginTop:'115px'}}>
          <h1
            style={{
              color: colors.dark_blue,
              fontWeight: "bold",
            }}
            className={`${styles.largeFont} mx-lg-5 mx-0`}
          >
            CSR
          </h1>

          <div 
          className={`${styles.mar}`}

          >
            <h1
              style={{
                fontWeight: "bold",
                color: colors.cloud,
                marginTop: "0",
                marginBottom: "10px",
              }}
              className={`${styles.largeFont}`}
            >
              Projects
            </h1>
            <p className="w-75">Corporate social responsibility (CSR) is a strategy undertaken by companies to not just grow profits, but also to take an active and positive social role in the world around them.</p>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default csrLayout