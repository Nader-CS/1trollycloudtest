import colors from "@app/common/colors";
import Link from "next/link";
import React from "react";

const HomeThirdSec = () => {
  return (
    <main
      style={{
        backgroundColor: colors.background,
        color: colors.dark_blue,
      }}
      className="p-5 mx-auto"
    >
      <form>
        <div className="container d-flex flex-column">
          <div className="w-50">
            <p className="h3 fw-bold">Get in Touch</p>
            <p>
              If you’re ready to see how we can support your company, book a
              call to chat with our sales team or request a customized solution
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
                  <label htmlFor="companyName" className="form-label fw-bold">
                    Company Name
                  </label>
                  <div className="input-group">
                    <input
                      placeholder="Your Company Name"
                      type="text"
                      name="companyName"
                      id="companyName"
                      className="rounded-2 form-control"
                      style={{ backgroundColor: colors.background }}
                      aria-describedby="basic-addon3 basic-addon4"
                    />
                  </div>
                </div>
              </div>

              <div className="row gap-3">
                <div className="col-lg col-md-12">
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

                <div className="col-lg col-md-12">
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
              </div>
            </div>

            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <label htmlFor="phoneNumber" className="form-label fw-bold">
                  Request a Customized Solution
                </label>
                <p className="text-primary">Optional</p>
              </div>
              <div className="input-group">
                <textarea
                  className="form-control"
                  placeholder="Type Here..."
                  style={{ backgroundColor: colors.background }}
                  rows={5}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="nav-link mt-3 text-decoration-underline align-self-lg-end align-self-center"
          >
            Get in Touch
          </button>
        </div>
      </form>
    </main>
  );
};

export default HomeThirdSec;
