"use client";
import colors from "@app/common/colors";
import styles from "./ourProducts.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const OurProductsLayout = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState("enterprise");
  const router = useRouter(); 

  useEffect(() => {
    router.push("/ourProducts/enterprise");
  }, [router]);

  return (
    <>
      <div
        className={``}
        style={{
          backgroundColor: colors.background,
          position: "relative",
          padding: "100px 0px 0px 0px",
        }}
      >
        <Image
          src="/assets/images/ourProductsLayout.png"
          width={140}
          height={140}
          alt="backColumn"
          className="h-100"
          style={{
            position: "absolute",
            left: "0",
            top: "0",
            width: "7.3%",
          }}
        />
        <Image
          src="/assets/images/ourProductsLayout.png"
          width={140}
          height={140}
          alt="backColumn"
          className="h-100"
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "7.3%",
          }}
        />

        <div
          className="d-flex flex-column align-items-start offset-1 pb-5"
          style={{ marginTop: "100px" }}
        >
          <h1
            style={{
              color: colors.dark_blue,
              fontWeight: "bold",
            }}
            className={`${styles.largeFont} mx-lg-5 mx-0`}
          >
            Our
          </h1>

          <div className={`${styles.mar}`}>
            <h1
              style={{
                fontWeight: "bold",
                color: colors.cloud,
                marginTop: "0",
                marginBottom: "10px",
              }}
              className={`${styles.largeFont}`}
            >
              Products
            </h1>
          </div>
        </div>
        
        <div className={`d-flex flex-lg-row flex-column ${styles.sideNav}`}>
          {/* <div
          className="align-self-end"
            style={{
              background: "#B6BBBD",
              height: "120px",
              width: "2px",
              marginLeft: "4%",
            }}
          ></div> */}
          <ul className={`d-flex flex-lg-column align-items-lg-start  flex-md-row align-items-md-center  gap-3 mt-lg-5 mt-0 ${styles.sideNavItems} p-0`} style={{listStyleType: 'none'}}>
            <li className={`nav-item`}>
              <Link
                className={`nav-link  ${
                  selectedLink === "enterprise" ? "fw-bold text-black" : ""
                }`}
                style={{color:'#7B7D7E'}}
                aria-current="page"
                href="/ourProducts/enterprise"
                onClick={() => setSelectedLink("enterprise")}
              >
                Enterprise
              </Link>
            </li>
            <li className={`nav-item `}>
              <Link
                className={`nav-link  my-lg-2 my-md-0 ${
                  selectedLink === "businessPartners" ? "fw-bold text-black" : ""
                }`}
                style={{color:'#7B7D7E'}}
                aria-current="page"
                href="/ourProducts/businessPartners"
                onClick={() => setSelectedLink("businessPartners")}
              >
                Partners
              </Link>
            </li>
            <li className={`nav-item `}>
              <Link
                className={`nav-link  ${
                  selectedLink === "consumer" ? "fw-bold text-black" : ""
                }`}
                style={{color:'#7B7D7E'}}
                aria-current="page"
                href="/ourProducts/consumer"
                onClick={() => setSelectedLink("consumer")}
              >
                Consumer
              </Link>
            </li>
          </ul>
        {children}
        </div>

      </div>
    </>
  );
};

export default OurProductsLayout;
