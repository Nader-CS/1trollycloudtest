"use client";
import colors from "@app/common/colors";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { usePathname } from "next/navigation";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  // const [isLogged, setIsLogged] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    if (pathname !== "/") {
      const selectedPathname = pathname.split("/")[1];
      setSelectedOption(selectedPathname);
    } else {
      setSelectedOption("home");
    }
  }, [pathname]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (screenWidth <= 991) {
      setIsCollapsed(!isCollapsed);
    }
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg p-0 w-100  
          ${isCollapsed ? styles.bgNav : "bg-transparent"}
          `}
        style={{
          zIndex: 99,
          position: "absolute",
          top: isCollapsed ? 0 : 10,
          backfaceVisibility: "hidden",
          boxShadow: "none",
          color: colors.dark_blue,
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <Image
              style={{ width: 55 }}
              className="navLogo"
              src="/assets/images/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
          </Link>
          <button
            className={`navbar-toggler rounded-1 ${
              isCollapsed ? " " : "collapsed"
            }`}
            // style={{ backgroundColor: "white" }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded={isCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              isCollapsed ? "show" : ""
            } `}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav d-flex gap-5">
              <li className={`nav-item `}>
                <Link
                  className={`nav-link text-black ${styles.underLine} ${
                    selectedOption === "home" ? "fw-bold" : ""
                  }`}
                  aria-current="page"
                  href="/"
                  onClick={() => handleOptionClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  text-black ${styles.underLine} ${
                    selectedOption === "ourProducts" ? "fw-bold" : ""
                  }`}
                  href="/ourProducts"
                  // onClick={() => setIsCollapsed(!isCollapsed)}

                  onClick={() => handleOptionClick("ourProducts")}
                >
                  Our Products
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link  text-black ${styles.underLine} ${
                    selectedOption === "about" ? "fw-bold" : ""
                  }`}
                  href="/about"
                  role="button"
                  // onClick={() => setIsCollapsed(!isCollapsed)}

                  onClick={() => handleOptionClick("about")}
                >
                  About US
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className={`nav-link text-black ${styles.underLine} ${
                    selectedOption === "testimonials" ? "fw-bold" : ""
                  }`}
                  href="/testimonials"
                  // onClick={() => setIsCollapsed(!isCollapsed)}

                  onClick={() => handleOptionClick("testimonials")}
                >
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link  text-black ${styles.underLine} ${
                    selectedOption === "csrProjects" ? "fw-bold" : ""
                  }`}
                  href="/csrProjects"
                  // onClick={() => setIsCollapsed(!isCollapsed)}
                  onClick={() => handleOptionClick("csrProjects")}
                >
                  CSR Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-decoration-underline text-black ${
                    styles.underLine
                  } ${selectedOption === "getIn" ? "fw-bold" : ""}`}
                  href="/"
                  onClick={() => setSelectedOption("getIn")}
                >
                  Get in Touch
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link text-black ${styles.underLine} ${
                    selectedOption === "profile" ? "fw-bold" : ""
                  }`}
                  href="/profile"
                  // onClick={() => setIsCollapsed(!isCollapsed)}
                  onClick={() => handleOptionClick("profile")}
                >
                  <FontAwesomeIcon icon={faCircleUser} fontSize={20} />
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className={`nav-link text-black ${styles.underLine} ${
                    selectedOption === "signIn" ? "fw-bold" : ""
                  }`}
                  href="/signIn"
                  // onClick={() => setIsCollapsed(!isCollapsed)}
                  onClick={() => handleOptionClick("signIn")}
                >
                  Sign In
                  {/* <Image
                    src="/assets/images/user.png"
                    width={20}
                    height={20}
                    alt="profile"
                  /> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
