import colors from "@app/common/colors";
import styles from "./profile.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const ProfileLayout = ({ children }) => {
  return (
    <>
      <div
        className={``}
        style={{
          backgroundColor: colors.background,
          position: "relative",
          padding: "30px 0px 0px 0px",
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
          {children}
      </div>
    </>
  );
};

export default ProfileLayout;
