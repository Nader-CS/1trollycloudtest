"use client"
import Image from "next/image";
import React from "react";
import colors from "./common/colors";



const Loading = () => {
  return (
    <div
      className="w-100 h-100 d-flex justify-content-center align-items-center "
      style={{ padding: "250px 0 250px 0" }}
    >
     <div className="d-flex justify-content-center">
        <div className="spinner-border text-info"  style={{width: '3rem', height: '3rem'}} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

    </div>
  );
};

export default Loading;
