import colors from "@app/common/colors";
import styles from "./about.module.css";
import React from "react";

const aboutUsLayout = ({ children }) => {
  return (
    <>
      <div className={`${styles.backGround} p-5`}>
        <div
          className="d-flex flex-column align-items-start offset-1"
          style={{ marginTop: "115px" }}
        >
          <h1
            style={{
              color: colors.dark_blue,
              fontWeight: "bold",
            }}
            className={`${styles.largeFont} mx-lg-5 mx-0`}
          >
            Who
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
              We are
            </h1>
          </div>
        </div>
      </div>
      {children}

      <form className="py-5" style={{backgroundColor: colors.background}}>
        <div className="container d-flex flex-column" >
          <div className="w-50">
            <p className="fs-3 fw-bold">
              Looking to join our team of Problem Solvers?
            </p>
            <p>
              If there is a specific role you are interested in just drop your
              CV down below and we’ll contact you whenever a vacancy is
              available!
            </p>
          </div>
          <div className="p-0 d-flex flex-lg-row flex-column gap-5">
            <div
              className="flex-grow-1 d-flex flex-column"
              style={{ justifyContent: "space-between" }}
            >
              <div className="row">
                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="fullName" className="form-label fw-bold">
                    Full Name
                  </label>
                  <div className="input-group">
                    <input
                      placeholder="Your Full Name"
                      type="text"
                      name="fullName"
                      id="fullName"
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>

                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="jobTitle" className="form-label fw-bold">
                    Job Title
                  </label>
                  <div className="input-group">
                    <input
                      placeholder="job title"
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="years" className="form-label fw-bold">
                  Years of Experience
                  </label>
                  <div className="input-group">
                    <input
                      placeholder="your years of experience"
                      type="number"
                      name="years"
                      id="years"
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email Address
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@gamil.com"
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>

                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="phoneNumber" className="form-label fw-bold">
                    Phone Number
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">
                      +2
                    </span>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Your Phone Number"
                      aria-label="phoneNumber"
                      aria-describedby="basic-addon1"
                      name="phoneNumber"
                      style={{ backgroundColor: colors.background }}
                      id="phoneNumber"
                    />
                  </div>
                </div>
                <div className="mb-3 col-lg col-md-12">
                  <label htmlFor="companyName" className="form-label fw-bold">
                  Do you have a Driver’s License?
                  </label>
                  <div className="d-flex gap-2">
                    <input
                      placeholder="Your Company Name"
                      type="button"
                      value="Yes"
                    //   onClick={()=>{}}
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                    <input
                      placeholder="Your Company Name"
                      type="button"
                      value="No"
                    //   onClick={()=>{}}
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="nav-link mt-3 text-decoration-underline align-self-lg-end align-self-center"
          >
            Request Contact
          </button>
        </div>
      </form>
    </>
  );
};

export default aboutUsLayout;
