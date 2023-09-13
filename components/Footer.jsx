"use client";
import React, { useEffect, useState } from "react";
import colors from "@app/common/colors";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
  const [selectedValue, setSelectedValue] = useState("UAE");

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <footer
        className="text-center text-lg-start"
        style={{
          backgroundColor: colors.light_cloud,
          color: colors.dark_blue,
          // position:'absolute',
          // bottom
        }}
      >
        <div className="container-fluid">
          <div className="mx-5 d-flex flex-xl-row flex-column justify-content-between align-items-lg-start align-items-center">
            <div className="mt-5 ">
              <Link className="navbar-brand d-flex" href="/">
                <i className="fa-brands fa-facebook"></i>
                <Image
                  className="navLogo mx-3"
                  src="/assets/images/logo.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  onClick={() => {
                    window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                />
                <p
                  style={{ color: colors.cloud }}
                  className="display-6 fw-bold"
                >
                  1Trolley
                  <span
                    className="text-white px-2 mx-1"
                    style={{ backgroundColor: colors.cloud }}
                  >
                    Cloud
                  </span>
                </p>
              </Link>
            </div>
            <section className="" style={{ fontSize: "13px" }}>
              <div className="container text-center text-lg-start my-5 ms-xl-5 ms-0">
                <div className="d-flex flex-lg-row flex-column gap-5  ms-0">
                  <div className="p-0 ">
                    <h6 className="text-uppercase fw-bold mb-2">company</h6>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <Link
                          href="/about"
                          className={`nav-link p-0 fs-6  ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/about"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Our Team
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="p-0">
                    <h6 className="text-uppercase fw-bold mb-2">
                      our services
                    </h6>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Hive
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Hive Pods
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Hive Chill
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Hive Mind
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={`p-0`}>
                    <h6 className="text-uppercase fw-bold mb-2">
                      our services
                    </h6>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Hive Mind Plus
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          1 POS
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          1 Pay
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={`p-0`}>
                    <h6 className="text-uppercase fw-bold mb-2">support</h6>
                    <ul className="nav flex-column">
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="nav-item mb-2">
                        <Link
                          href="/"
                          className={`nav-link p-0 fs-6 ${styles.underLine}`}
                          style={{ color: colors.dark_blue }}
                          onClick={() => {
                            window.scroll({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          Get in Touch
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={`p-0`}>
                    <h6 className="text-uppercase fw-bold mb-2">country</h6>
                    <div className="dropdown mx-auto"
                    style={{
                      width:'100px',
                      border: "0.5px solid black",
                      borderRadius: "21px",
                      padding:'3px'
                    }}
                    >
                      <button
                        className="d-flex align-items-center border-0 btn dropdown-toggle p-0"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Image
                        src={`/assets/images/${selectedValue}.png`}
                        alt="country"
                        width={20}
                        height={20}
                        />
                        <p className="p-0 m-0">{selectedValue}</p>
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item" onClick={() => setSelectedValue("UAE")}>UAE</li>
                        <li className="dropdown-item" onClick={() => setSelectedValue("Egypt")}>Egypt</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div
            className=" mx-5"
            style={{ backgroundColor: colors.light_gray, height: "2px" }}
          ></div>
          <div className="container-fluid">
            <div className="row py-3 mx-5 ">
              <div className="col-lg col-md-12">
                <p className="text-reset m-0 ">
                  2022 © 1Trolley Business. All Rights Reserved.
                </p>
              </div>
              <div
                className="col-lg col-md-12 d-flex gap-4 justify-content-center my-lg-0 my-3"
                style={{ color: colors.cloud, fontSize: 25 }}
              >
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faWhatsapp} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="col-lg col-md-12">
                <ul className="nav d-flex flex-md-row flex-column justify-content-around gap-2">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link p-0 ${styles.underLine}`}
                      style={{ color: colors.dark_blue }}
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      href="/"
                      className={`nav-link p-0 ${styles.underLine}`}
                      style={{ color: colors.dark_blue }}
                      onClick={() => {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
