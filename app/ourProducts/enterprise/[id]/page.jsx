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
      title: "Hive",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "HIVE is a SaaS platform that enables partners to have stationary or mobile micro fulfilment solutions, closer to the customer, whilst adjusting delivery vehicle type to drop size.",
      secondParagraph:
        "Thus resulting in faster and cost-efficient distribution and delivery, all with an option for live operations through our customized dashboards and real time vehicle tracking systems.",
      logo: "/assets/images/hive.png",
      img1: "/assets/images/productsRepeat.png",
    },

    {
      id: 2,
      title: "Hive Mind",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/hiveMind.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 3,
      title: "1 POS",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "1POS is a digital POS based on a 2-way instant communication allowing for digital checkouts in the marketplace, with blockchain smart contracts for warranties and after sale service. ",
      secondParagraph:
        "Thus eliminating paperwork, reducing transactions time and capturing smart consumer data, with direct connectivity to 1TB’s neighborhood loyalty system.",
      logo: "/assets/images/1pos.png",
      img1: "/assets/images/1posImg1.png",
    },
    {
      id: 4,
      title: "Hive Pods",
      headline: "Hive Pods",
      firstParagraph:
        "Hive Pods is an extended solution of hive, which is a SaaS platform that enables partners to have a stationary or mobile micro fulfillment solutions, closer to the sutomer, whilst adjusting delivery vehicle type to drop size. ",
      secondParagraph:
        "Hive Pods revolves around enabling smaller delivery vehicles to deliver faster whilst much more cost efficient through a state-of-the-art innovates technology.",
      logo: "/assets/images/hivePods.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 5,
      title: "Hive Mind Lite",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/hiveMind.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 6,
      title: "1 Pay",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "1Pay is a blockchain solution that enables partners to manage all forms of e-payments and cash with real time reconciliation, enabling faster and more secure transactions in the marketplace",
      subTitle: "Key Features",
      points:[
        "Control the cash and credit cycle according to company policies and remove ability for sales to control the in-market payment cycle.",
        "Reflect quick in market action resulting in higher sales with lower bad debts in market, whilst eliminating need for frequency of credit committee meetings.",
        "Policies can be set during meetings and full management will be done digitally.",
      ],
      logo: "/assets/images/1pay.png",
      img1: "/assets/images/1posImg1.png",
    },
    {
      id: 7,
      title: "Hive Chill",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Chill is an IOT SaaS platform that enables partners to track the location of their assets in terms of location and temperature in real time, whilst enabling an alert system for any deviations on location or preset temp parameters, enabling real time preventive measures.",
      logo: "/assets/images/hiveChill.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 8,
      title: "Hive Mind +",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "HIVE MIND + is an integrated M Commerce with full loyalty engine, enabling companies to acquire and retain their own customer base, enhancing their CLTV.",
      secondParagraph:
        "1trolleyCloud platform provides an advanced set of analytics and machine learning classification model toolset that optimize app behavior out of the box.",
      thirdParagraph:
        "HIVE MIND+ platform provides the ability to create your own coupon sets and distribute the coupon codes to the users within the mobile app, who redeem points to get coupons. Moreover, you can  upload an existing coupon with an excel file and create the coupons.",
      logo: "/assets/images/hiveMind+.png",
      img1: "/assets/images/productsRepeat.png",
      img2: "/assets/images/hiveMinD+img2.png",
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
