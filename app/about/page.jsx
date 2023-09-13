"use client";
import React, { Fragment, useEffect, useState } from "react";
import colors from "@app/common/colors";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  const slides = [
    {
      img: "/assets/images/about1.png",
      name: "Walid Rashwan",
      pos: "CEO & Founder",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about2.png",
      name: "Menna Ashraf",
      pos: "UI/UX Designer / Account Manager",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about3.png",
      name: "Ahmed",
      pos: "CEO & Founder",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about4.png",
      name: "Bassam Nagy",
      pos: "Marketing Exec.",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about5.png",
      name: "Menna",
      pos: "project specialist",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about6.png",
      name: "Nourhan",
      pos: "Backebd developer",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about7.png",
      name: "Eman",
      pos: "HR Officer",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
    {
      img: "/assets/images/about8.png",
      name: "Hend",
      pos: "HR Officer",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(7);
  const [hiddenSlides, setHiddenSlides] = useState([]);

  const handleNextSlide = () => {
    setHiddenSlides((prevHiddenSlides) => [...prevHiddenSlides, currentSlide]);
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // const handleResize = () => {
  //   setScreenWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <main
      className="pb-5"
      style={{ backgroundColor: colors.background, paddingTop: "150px" }}
    >
      <div
        className="d-flex align-items-end h-100 "
        style={{
          overflowX: "hidden",
          marginLeft:'-30%',
          // marginLeft: `${(screenWidth / ((screenWidth/85) - 2)) * -1}%`,
        }}
      >
        {slides.reverse().map((person, idx) => (
          <div key={idx} className="d-flex align-items-end">
            <div>
              <Image
                src={person.img}
                alt="photo"
                width={160}
                height={currentSlide === idx ? 450 : 260}
                style={{
                  display: hiddenSlides.includes(idx) ? "none" : "inline",
                  transition: "display 0.5s ease-in-out",
                }}
                className="mx-1"
              />
            </div>
            <div
              className=" mx-5"
              style={{
                display: currentSlide === idx ? "flex" : "none",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "400px" }}>
                <p
                  className="fw-bold fs-5 mb-0"
                  style={{ color: colors.cloud }}
                >
                  {person.name}
                </p>
                <p className="p-0 m-0" style={{ color: "#7B7D7E" }}>
                  {person.pos}
                </p>
                <p className="mt-3 w-75" style={{ color: colors.dark_blue }}>
                  {person.details}
                </p>
              </div>
              <Image
                src="/assets/images/right-chevron.png"
                alt="right"
                width={30}
                height={30}
                onClick={handleNextSlide}
                style={{ cursor: "pointer", marginTop: "250px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
