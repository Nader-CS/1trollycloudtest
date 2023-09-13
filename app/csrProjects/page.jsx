import colors from "@app/common/colors";
import React from "react";
import styles from "./csr.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import CsrProjectsCard from "@components/csrProjects/csrProjectsCard";

const CSRProjects = () => {
  const data = [
  {
    image:"/assets/images/award 1.png",
    projName: "Kermaz",
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name:"Hend ElNokaly",
    position:"CEO and Founder",
  },
  {
    image:"/assets/images/award 1.png",
    projName: "Kermaz",
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name:"Hend ElNokaly",
    position:"CEO and Founder",
  },
  {
    image:"/assets/images/award 1.png",
    projName: "Kermaz",
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name:"Hend ElNokaly",
    position:"CEO and Founder",
  },
  {
    image:"/assets/images/award 1.png",
    projName: "Kermaz",
    paragraph:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    name:"Hend ElNokaly",
    position:"CEO and Founder",
  },
]
  return (
    <main
      className="px-3 pb-5"
      style={{ backgroundColor: colors.background, paddingTop: "150px" }}
    >
      <div className="container">
        <div className="row justify-content-evenly">
         {data.map((item,idx)=> <CsrProjectsCard key={idx} item={item} style={styles.cardBox}/>) }
        </div>
      </div>
    </main>
  );
};

export default CSRProjects;
