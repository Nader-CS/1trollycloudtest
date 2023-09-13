import OurProductsCard from "@components/ourProducts/ourProductsCard";
import Link from "next/link";
import React from "react";

const Enterprise = () => {
  const products = [
    {
      id: 1,
      title: "Hive",
      description:
        "HIVE is a SaaS platform that enables partners to have stationary or mobile micro fulfillment solutions.",
    },
    {
      id: 2,
      title: "Hive Mind",
      description:
        "HiveMind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed.",
    },
    {
      id: 3,
      title: "1 POS",
      description:
        "1POS is a digital POS based on a 2-way instant communication allowing for digital checkouts in the marketplace.",
    },
    {
      id: 4,
      title: "Hive Pods",
      description:
        "Hive Pods is an extended solution of hive, which is a SaaS platform that enables partners to have a stationary or mobile micro fulfillment solutions,.",
    },
    {
      id: 5,
      title: "Hive Mind Lite",
      description:
        "HiveMind Lite is an integrated white label E-Commerce Solution with an option to enable loyalty and delivery solutions as needed.",
    },
    {
      id: 6,
      title: "1 Pay",
      description:
        "1Pay is a blockchain solution that enables partners to manage all forms of e-payments and cash with real time reconciliation.",
    },
    {
      id: 7,
      title: "Hive Chill",
      description:
        "Hive Chill is an IOT SaaS platform that enables partners to track the location of their assets in terms of location and temperature in real time.",
    },
    {
      id: 8,
      title: "Hive Mind +",
      description:
        "HIVE MIND + is an integrated M Commerce with full loyalty engine.",
    },
  ];

  return (
    <div className="align-self-start flex-grow-1 container px-5">
      <div className="">
        <p className="fw-bold fs-4 p-0 m-0">Enterprise</p>
        <p className="p-0 m-0">
          These are the products that target Large enterprises
        </p>
      </div>
      <div className="row my-5 ">
        {products.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-12 my-2">
            <Link
              href={{
                pathname: `/ourProducts/enterprise/${product.id}`,
                query: {
                  name: "enterprise",
                },
              }}
              // as={`/ourProducts/enterprise/${product.id}`}
              className="nav-link "
            >
              <OurProductsCard product={product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enterprise;
