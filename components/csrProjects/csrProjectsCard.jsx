import React from "react";
import styles from "./csrProjectsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const CsrProjectsCard = ({item,style}) => {
  return (
    <div className={`${style} p-4 col-lg-5 col-12 my-4 `}>
    <div className="d-flex gap-5">
      <div className=" d-flex align-items-center justify-content-center">
        <Image
          src={item.image}
          alt="photo"
          width={60}
          height={60}
        />
      </div>
      <div className="d-flex flex-column">
        <p className="fw-bold fs-4">{item.projName}</p>
        <p>
          {item.paragraph}
        </p>
        <p className="fs-5 fw-medium">{item.name}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="m-0 p-0">{item.position}</p>
          <Link
            href={`/csrProjects/1`}
            className="nav-link"
          >
            Read more
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CsrProjectsCard;
