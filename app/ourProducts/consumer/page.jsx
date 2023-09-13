import OurProductsCard from "@components/ourProducts/ourProductsCard";
import Link from "next/link";
import React from "react";

const Consumer = () => {
  const products = [
    {
      id: 1,
      title: "1 Trolley Neighborhood App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
    },
  ];

  return (
    <div className="align-self-start flex-grow-1 container px-5">
      <div className="">
        <p className="fw-bold fs-4 p-0 m-0">Consumer</p>
        <p className="p-0 m-0">
          These are the products that target Large enterprises
        </p>
      </div>
      <div className="row my-5 ">
        {products?.map((product) => (
          <div key={product.id} className="col-xl-4 col-lg-6 col-12 my-2">
            <Link
              href={{
                pathname: `/ourProducts/consumer/${product.id}`,
                query: {
                  name: "consumer",
                },
              }}
              // as={`/ourProducts/consumer/${product.id}`}
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

export default Consumer;
