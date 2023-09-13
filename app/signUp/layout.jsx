import Image from "next/image";
import React from "react";
import styles from "./signUp.module.css"
import colors from "@app/common/colors";

const SignUpLayout = ({ children }) => {
  return (
    <main
    className="d-flex"
    style={{backgroundColor:colors.background}}
    >
      <div className={` ${styles.bgImage} flex-grow-1`}>
      
        <Image
          src="/assets/images/logIn.png"
          width={1000}
          height={1000}
          alt="cloud"
        //   style={{
        //     width:'60%'
        //   }}
          className={` h-100 w-100`}
        />
      </div>
      <div className="flex-grow-1">

      {children}
      </div>
    </main>
  );
};

export default SignUpLayout;
