import React from "react";
import Image from "next/image";
import styles from "./HomeFirstSec.module.css";
import Link from "next/link";
import colors from "@app/common/colors";

const HomeFirstSec = () => {
  return (
    <div className={` ${styles.backImg} p-4 `}>
      <div style={{ width: "100%", height: 170 }}></div>
      <div className="d-flex offset-1">
        <div className="d-flex flex-column">
          <div className="d-flex flex-lg-row flex-column-reverse align-items-lg-center">
            <h1
              style={{
                display: "inline",
                color: colors.dark_blue,
                fontWeight: "bold",
              }}
              className={`${styles.largeFont}`}
            >
              1Trolley
            </h1>
            <Image
              src="/assets/images/logo.svg"
              alt="logo"
              width={136}
              height={99}
              className={`${styles.logo} mt-5`}
            />
          </div>
          <div className="align-self-lg-end align-self-auto d-flex flex-column align-items-start">
            <h1
              style={{
                fontWeight: "bold",
                color: colors.cloud,
                marginTop: "0",
                marginBottom: "0",
              }}
              className={`${styles.largeFont}`}
            >
              Cloud
            </h1>
            <p className="m-0 p-0">Empowering communities</p>
            <p className="m-0 p-0">through digital transformation.</p>
            <Link href="/" className="nav-link mt-3 text-decoration-underline">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: 170 }}></div>
      <div className="d-flex justify-content-end gap-5 my-5">
        <div className="text-center">
          <Image
            src="/assets/images/award 1.png"
            alt="logo"
            width={87}
            height={65}
            // className="mt-5"
          />
          <p className="m-0 p-0 mt-3">Portfolio Company Joining</p>
          <p className="m-0 p-0"> SOSV from Africa & Middle East</p>
        </div>
        <div className="text-center">
          <Image
            src="/assets/images/award 2.png"
            alt="logo"
            width={87}
            height={65}
            // className="mt-5"
          />
          <p className="m-0 p-0 mt-3">EBRD Star Venture Award </p>
          <p className="m-0 p-0">Only Winner from Africa & Middle East</p>
        </div>
      </div>
    </div>
  );
};

export default HomeFirstSec;
