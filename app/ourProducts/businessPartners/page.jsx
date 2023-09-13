"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../ourProducts.module.css";
import OurProductsCard from "@components/ourProducts/ourProductsCard";

const Partners = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const retailsProducts = [
    {
      id: 1,
      title: "1 Trolley Business",
      description:
        "Flock is an on-demand delivery service for online and small businesses, whose products require special care, or a specialized vehicle, to transport.",
    },
    {
      id: 2,
      title: "Fleet",
      description:
        "Fleet is a last-mile delivery management system for brands who need order fulfillment in less than an hour.",
    },
    {
      id: 3,
      title: "Flock",
      description:
        "Flock is an on-demand delivery service for online and small businesses, whose products require special care, or a specialized vehicle, to transport.",
    },
    {
      id: 4,
      title: "1 Pay",
      description:
        "1Pay is a blockchain solution that enables partners to manage all forms of e-payments and cash with real time reconciliation.",
    },
    {
      id: 5,
      title: "1 POS",
      description:
        "1POS is a digital POS based on a 2-way instant communication allowing for digital checkouts in the marketplace.",
    },

    {
      id: 6,
      title: "Hive Mind Lite",
      description:
        "HiveMind Lite is an integrated white label E-Commerce Solution with an option to enable loyalty and delivery solutions as needed.",
    },
  ];

  const gigProducts = [
    {
      id: 7,
      title: "1 Trolley Driver App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      id: 8,
      title: "Picker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
    {
      id: 9,
      title: "Butler",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];

  return (
    <div className="align-self-start flex-grow-1 container px-5">
      <div className="mx-5">
        <p className="fw-bold fs-4 p-0 m-0">Business Partners</p>
        <p className="p-0 m-0">
          These are the products that target Large enterprises
        </p>
      </div>
      <div className="row my-5 ">
        <div
          className={`col-lg-6 p-5 ${styles.hoverPartner} ${
            selectedOption === "Retailers" ? styles.selectedPartner : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleOptionClick("Retailers")}
        >
          <p className="fw-bold fs-4">Retailers</p>
          <p className="m-0 p-0">
            Whether if you are a single store owner, medium size with a few
            stores or an organized retail, we have relevant tools that help you
            to make the digital transformation, enabling your business to thrive
            and connecting you to your customers in a seamless fashion
          </p>
        </div>
        <div
          className={`col-lg-6 p-5 ${styles.hoverPartner} ${
            selectedOption === "Gig Workers" ? styles.selectedPartner : ""
          }`}
          style={{ cursor: "pointer" }}
          onClick={() => handleOptionClick("Gig Workers")}
        >
          <p className="fw-bold fs-4">Gig Workers</p>
          <p className="m-0 p-0">
            Providing digital tools for local communities that enable gig and
            employed workers to find and do their job more efficiently. Whether
            you are a delivery driver, a picker or even a cashier we have the
            digital tools to make enable you run your business more efficiently
            and put you on a clear path to digital transformation
          </p>
        </div>
      </div>

      {selectedOption === "Retailers" && (
        <div className="d-flex flex-column mt-5">
          <p className="fw-bold fs-4 m-0">Retailers</p>
          <p className="m-0 p-0">
            These are the products that target Large enterprises
          </p>
          <div className="row my-5 ">
            {retailsProducts.map((product) => (
              <div key={product.id} className="col-xl-4 col-lg-6 col-12 my-2">
                <Link
                  href={{
                    pathname: `/ourProducts/businessPartners/${product.id}`,
                    query: {
                      name: "businessPartners",
                    },
                  }}
                  // as={`/ourProducts/businessPartners/${product.id}`}
                  className="nav-link "
                >
                  <OurProductsCard product={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedOption === "Gig Workers" && (
        <div className="d-flex flex-column mt-5">
          <p className="fw-bold fs-4 m-0">Gig Workers</p>
          <p className="m-0 p-0">
            These are the products that target Large enterprises
          </p>
          <div className="row my-5 ">
            {gigProducts.map((product) => (
              <div key={product.id} className="col-xl-4 col-lg-6 col-12 my-2">
                <Link
                  href={{
                    pathname: `/ourProducts/businessPartners/${product.id}`,
                    query: {
                      name: "businessPartners",
                    },
                  }}
                  // as={`/ourProducts/businessPartners/${product.id}`}
                  className="nav-link "
                >
                  <OurProductsCard product={product} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Partners;
