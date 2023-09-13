import Image from "next/image";
import React from "react";

const OurProductsLoading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <div className="spinner-border  spinner-border-lg" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default OurProductsLoading;
