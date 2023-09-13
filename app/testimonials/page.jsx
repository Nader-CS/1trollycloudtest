import React, { Fragment } from "react";
import styles from "./testimonials.module.css";
import colors from "@app/common/colors";
import TestimonialsCard from "@components/testimonials/TestimonialsCard";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TestimonialsCardPerson from "@components/testimonials/TestimonialsCardPerson";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const DataArr = [
    {
      id: 1,
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      Person: "/assets/images/testimonialsPerson1.png",
      name1: "Walid Rashwan",
      name2: "Hend ElNokaly",
      pos1: "CEO and Founder",
      pos2: "CEO and Founder",
      image: "/assets/images/testimonialsImg1.png",
      reverse: false,
    },
    {
      id: 2,
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      Person: "/assets/images/testimonialsPerson2.png",
      name1: "Menna Ashraf",
      name2: "Hend ElNokaly",
      pos1: "CEO and Founder",
      pos2: "CEO and Founder",
      image: "/assets/images/testimonialsImg2.png",
      reverse: true,
    },
    {
      id: 3,
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      Person: "/assets/images/testimonialsPerson3.png",
      name1: "Menna Ashraf",
      name2: "Eden Farms",
      pos1: "CEO and Founder",
      pos2: "CEO and Founder",
      image: "/assets/images/testimonialsImg3.png",
      reverse: false,
    },
    {
      id: 4,
      text1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s.",
      Person: "/assets/images/testimonialsPerson4.png",
      name1: "John Doe",
      name2: "Hend ElNokaly",
      pos1: "CEO and Founder",
      pos2: "CEO and Founder",
      image: "/assets/images/testimonialsImg4.png",
      reverse: true,
    },
  ];

  return (
    <main
      className="d-flex flex-column py-5"
      style={{ backgroundColor: colors.background }}
    >
      <div className="my-5 mx-auto px-4 fw-bold">
        <p className="m-0 p-0" style={{ color: colors.dark_blue }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p className="m-0 p-0" style={{ color: colors.dark_blue }}>
          Lorem Ipsum has been the industry’s standard dumm.
        </p>
      </div>
      <div className="container">
        <div className="row gap-4 justify-content-center">
          {DataArr.map((item, idx) =>
            idx % 2 === 0 ? (
              <Fragment key={idx}>
                <TestimonialsCardPerson item={item} style={styles.cardBox} />
                <TestimonialsCard item={item} style={styles.cardBox} />
              </Fragment>
            ) : (
              <Fragment key={idx}>
                <TestimonialsCard item={item} style={styles.cardBox} />
                <TestimonialsCardPerson item={item} style={styles.cardBox} />
              </Fragment>
            )
          )}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
