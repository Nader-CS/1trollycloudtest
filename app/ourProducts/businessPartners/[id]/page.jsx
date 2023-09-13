"use client";
import React, { useEffect, useState } from "react";
import ProductDetails from "@components/ourProducts/ProductDetails";
import { useSearchParams } from "next/navigation";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  console.log(name)
  const productsDetails = [
    {
      id: 1,
      title: "1 Trolley Business",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Flock is an on-demand delivery service for online and small businesses, whose products require special care, or a specialized vehicle, to transport.",
      logo: "/assets/images/1trolleyBusiness.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 2,
      title: "Fleet",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Fleet is a last-mile delivery management system for brands who need order fulfillment in less than an hour",
      subTitle: "Key Features",
      points: [
        "Auto dispatching/ nearest available",
        " Full integration",
        "Live tracking",
        "Heat maps",
        "SLA monitoring",
        "Rider optimization",
        "B.I. & Reporting",
      ],
      logo: "/assets/images/fleet.png",
      img1: "/assets/images/fleetImg.png",
    },
    {
      id: 3,
      title: "Flock",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Flock is an on-demand delivery service for online and small businesses, whose products require special care, or a specialized vehicle, to transport.",
      logo: "/assets/images/flock.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 4,
      title: "1 Pay",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "1Pay is a blockchain solution that enables partners to manage all forms of e-payments and cash with real time reconciliation, enabling faster and more secure transactions in the marketplace",
      subTitle: "Key Features",
      points: [
        "Control the cash and credit cycle according to company policies and remove ability for sales to control the in-market payment cycle.",
        "Reflect quick in market action resulting in higher sales with lower bad debts in market, whilst eliminating need for frequency of credit committee meetings.",
        "Policies can be set during meetings and full management will be done digitally.",
      ],
      logo: "/assets/images/1pay.png",
      img1: "/assets/images/1posImg1.png",
    },
    {
      id: 5,
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
      id: 6,
      title: "Hive Mind Lite",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/hiveMind.png",
      img1: "/assets/images/productsRepeat.png",
    },
    {
      id: 7,
      title: "1 Trolley Driver App",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/hiveMind.png",
      img1: "/assets/images/productsRepeat.png",
    },

    {
      id: 8,
      title: "Picker",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/picker.png",
      img1: "/assets/images/productsRepeat.png",
    },

    {
      id: 9,
      title: "Butler",
      headline: "These are the products that target Large enterprises",
      firstParagraph:
        "Hive Mind Lite is an integrated white label E-Commerce website with an option to enable loyalty and delivery solutions as needed, enable companies to acquire and retain their own customer base through newly introduced digital solutions.",
      logo: "/assets/images/Butler.png",
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
