import colors from "@app/common/colors";
import styles from "./testimonials.module.css";
import Footer from "@components/Footer";
import React from "react";

const testimonialsLayout = ({ children }) => {
  return (
    <>
      <div
        className=" p-5"
        style={{
          backgroundImage: "url('/assets/images/topBackground@2x.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          height: "330px",
        }}
      >
        <div className="d-flex flex-column align-items-start" style={{marginTop:'115px'}}>
          <h1
            style={{
              color: colors.dark_blue,
              fontWeight: "bold",
            }}
            className={`${styles.largeFont} offset-xl-2 offset-lg-0 `}
          >
            Testimonials &
          </h1>

          <div className="align-self-lg-center align-self-auto">
            <h1
              style={{
                fontWeight: "bold",
                color: colors.cloud,
                marginTop: "0",
                marginBottom: "10px",
              }}
              className={`${styles.largeFont}`}
            >
              Success Stories
            </h1>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default testimonialsLayout;
