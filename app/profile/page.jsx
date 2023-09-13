"use client";
import React, { useState } from "react";
import styles from "./profile.module.css";
import colors from "@app/common/colors";
import Link from "next/link";

const ProfilePage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <main className="container pb-5">
      <div
        className="d-flex flex-column align-items-start offset-1 pb-5"
        style={{ marginTop: "100px" }}
      >
        <h1
          style={{
            color: colors.dark_blue,
            fontWeight: "bold",
          }}
          className={`${styles.largeFont} `}
        >
          Hello, Ahmed
        </h1>
      </div>
      <div className="d-flex flex-column gap-5 my-5 px-5">
        <div>
          <p className="p-0 m-0" style={{ color: colors.gray }}>
            Full Name
          </p>
          <p className="p-0 m-0 fw-bold">Ahmed Ali</p>
        </div>
        <div>
          <p className="p-0 m-0" style={{ color: colors.gray }}>
            Email
          </p>
          <p className="p-0 m-0 fw-bold">ahmed.ali@gmail.com</p>
        </div>
      </div>
      <div className="row my-5">
        <Link
          href="/profile/operations"
          className={`nav-item text-decoration-none col-lg-4 p-5 ${
            styles.hoverPartner
          } ${selectedOption === "Operations" ? styles.selectedPartner : ""}`}
          style={{ cursor: "pointer", color: colors.dark_blue }}
          onClick={() => handleOptionClick("Operations")}
        >
          <p className="fw-bold fs-4">Operations</p>
          <p className="m-0 p-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Loras beenxt of the printing and typesetting industry.
            Lorem.
          </p>
        </Link>
        <Link
          href="/profile/marketing"
          className={`nav-item text-decoration-none col-lg-4 p-5 ${
            styles.hoverPartner
          } ${selectedOption === "Marketing" ? styles.selectedPartner : ""}`}
          style={{ cursor: "pointer", color: colors.dark_blue }}
          onClick={() => handleOptionClick("Marketing")}
        >
          <p className="fw-bold fs-4">Marketing</p>
          <p className="m-0 p-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Loras beenxt of the printing and typesetting industry.
            Lorem.
          </p>
        </Link>
        <Link
          href="/profile/finance"
          className={`nav-item text-decoration-none col-lg-4 p-5 ${
            styles.hoverPartner
          } ${selectedOption === "Finance" ? styles.selectedPartner : ""}`}
          style={{ cursor: "pointer", color: colors.dark_blue }}
          onClick={() => handleOptionClick("Finance")}
        >
          <p className="fw-bold fs-4">Finance</p>
          <p className="m-0 p-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Loras beenxt of the printing and typesetting industry.
            Lorem.
          </p>
        </Link>
      </div>
    </main>
  );
};

export default ProfilePage;
