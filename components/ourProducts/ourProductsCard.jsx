import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurProductsCard = ({ product }) => {
  return (
    <>
      <div className="d-flex align-items-center gap-5 mb-1">
        <p className="fw-bold m-0">{product.title}</p>
        <FontAwesomeIcon icon={faChevronRight}/>
      </div>
      <div>
        <p>{product.description}</p>
      </div>
    </>
  );
};

export default OurProductsCard;
