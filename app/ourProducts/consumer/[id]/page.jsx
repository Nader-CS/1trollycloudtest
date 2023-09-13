"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductDetails from "@components/ourProducts/ProductDetails";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const productsDetails = [
    {
      id: 1,
      title: "1 Trolley Neighborhood App",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "HIVE MIND + is an integrated M Commerce with full loyalty engine, enabling companies to acquire and retain their own customer base, enhancing their CLTV.",
      secondParagraph:
        "1trolleyCloud platform provides an advanced set of analytics and machine learning classification model toolset that optimize app behavior out of the box.",
      logo: "/assets/images/1trolleyApp.png",
      img1: "/assets/images/productsRepeat.png",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    const product = productsDetails.filter((obj) => +obj?.id === +params?.id);
    setData(product);
  }, [params.id]);

  return (
    <>
      <ProductDetails data={data} name={name} />
    </>
  );
};

export default Page;
