import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

const TestimonialsCard = ({ item,style }) => {
  return (
    <>
      <div className={`${style} col-lg-7 col-12 p-0 d-flex`}>
        <div className="w-md-50 w-100 h-100 p-4 d-flex flex-column justify-content-between">
          <p>{item.text2}</p>
          <div className="">
            <p className="m-0 p-0 fw-bold">{item.name2}</p>
            <div className="d-flex justify-content-between">
              <p className="m-0 p-0">{item.pos2}</p>
              <Link
                href={`/testimonials/${item.id}`}
                className="nav-link"
              >
                Read more <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={item.image}
          width={300}
          height={300}
          alt="person1"
          className="w-50 h-100 rounded-1 d-md-block d-none"
        />
      </div>
    </>
  );
};

export default TestimonialsCard;
