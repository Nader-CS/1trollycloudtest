"use client";
import colors from "@app/common/colors";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./testimID.module.css";


const TestimonialsDetails = ({ params }) => {
  const DataArr = [
    {
      id: 1,
      date: "24.3.2023",
      image: "/assets/images/testimonialsImg4.png",
      title: "How 1Trolley changed my business to the better in just 3 months",
      author: "By Hend ElNokaly",
      firstParagraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      secondParagraph:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’,making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’.",
      thirdParagraph:
        "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      quote:
        "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,”",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(params.id);
    const DATA = DataArr.filter((obj) => +obj?.id === +params?.id);
    setData(DATA);
  }, [params.id]);
  console.log(data);

  return (
    <>
      <main className={`${styles.mainPad}`} style={{ backgroundColor: colors.background }}>
        <div className="container">
          <p className="fs-5" style={{ color: colors.cloud }}>
            {data[0]?.date}
          </p>
          <div className="row gap-3">
            <div className="col-lg col-12">
              <h1 className="fw-bold">{data[0]?.title}</h1>
              <p className="my-4 fs-5" style={{ color: colors.cloud }}>
                {data[0]?.author}
              </p>
              <p>{data[0]?.firstParagraph}</p>
            </div>
            <div className="text-center col ">
              <Image
                src= {data[0]?.image}
                alt="photo"
                width={600}
                height={350}
                className="w-100 h-75"
              />
              <p className="mt-5 fw-medium" style={{ color: colors.cloud }}>
                {data[0]?.quote}
              </p>
            </div>
          </div>
          <div className="row gap-3 py-5 mt-5">
            <div className="col-lg col-12 h-100 ">
              <Image
                src={data[0]?.image}
                alt="photo"
                width={600}
                height={350}
                className="w-100"
              />
            </div>
            <div className="col-lg col-12">
              <p>{data[0]?.secondParagraph}</p>
              <p>{data[0]?.thirdParagraph}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TestimonialsDetails;
