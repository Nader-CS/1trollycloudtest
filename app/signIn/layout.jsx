import Image from "next/image";
import React from "react";
import styles from "./signIn.module.css"
import colors from "@app/common/colors";

const SignInLayout = ({ children }) => {
  return (
    <main
    className="d-flex"
    style={{backgroundColor:colors.background}}
    >
      
        <Image
          src="/assets/images/logIn.png"
          width={1000}
          height={1000}
          alt="cloud"
        //   style={{
        //     width:'60%'
        //   }}
          className={`${styles.bgImage}`}
        />
      
      <div className="flex-grow-1">

      {children}
      </div>
    </main>
  );
};

export default SignInLayout;
