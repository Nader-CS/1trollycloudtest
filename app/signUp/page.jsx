"use client";
import colors from "@app/common/colors";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  return (
    <main style={{ paddingTop: "150px" }} className="px-lg-5 px-md-3 px-1">
      <form>
        <div className="container d-flex flex-column px-5">
          <div className="">
            <p className="display-3 fw-bold">Sign Up</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 mt-5">
              <label htmlFor="name" className="form-label fw-bold">
                Name
              </label>
              <div className="input-group">
                <input
                  placeholder="Full Name"
                  type="text"
                  name="name"
                  id="name"
                  className="rounded-2 form-control"
                  style={{ backgroundColor: colors.background }}
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5">
              <label htmlFor="email" className="form-label fw-bold">
                Email Address
              </label>
              <div className="input-group">
                <input
                  placeholder="example@gmail.com"
                  type="email"
                  name="email"
                  id="email"
                  className="rounded-2 form-control"
                  style={{ backgroundColor: colors.background }}
                  aria-describedby="basic-addon3 basic-addon4"
                />
              </div>
            </div>

            <div
              className="col-lg-6 col-12 mt-5"
              style={{ position: "relative" }}
            >
              <label htmlFor="password" className="form-label fw-bold">
                Password
              </label>
              <div className="input-group">
                <input
                  placeholder="Your password"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  id="password"
                  className="rounded-2 form-control"
                  style={{ backgroundColor: colors.background }}
                  aria-describedby="basic-addon3 basic-addon4"
                />
                <FontAwesomeIcon
                  onClick={() => setPasswordShown(!passwordShown)}
                  icon={passwordShown ? faEye : faEyeSlash}
                  style={{ position: "absolute", right: 12, top: 10 }}
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-12 mt-5"
              style={{ position: "relative" }}
            >
              <label htmlFor="confirmPassword" className="form-label fw-bold">
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  placeholder="Your password"
                  type={confirmPasswordShown ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  className="rounded-2 form-control"
                  style={{ backgroundColor: colors.background }}
                  aria-describedby="basic-addon3 basic-addon4"
                />
                <FontAwesomeIcon
                  onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                  icon={confirmPasswordShown ? faEye : faEyeSlash}
                  style={{ position: "absolute", right: 12, top: 10 }}
                />
              </div>
            </div>
            <button
              type="submit"
              className="nav-link my-5 text-decoration-underline align-self-end fw-medium fs-5"
            >
              Create Account
            </button>
          </div>
          <div className="d-flex align-items-center px-5 my-3">
            <div
              className="w-50 px-3"
              style={{ height: "1px", backgroundColor: colors.dark_blue }}
            ></div>
            <p className="px-3 m-0">Or</p>
            <div
              className="w-50 px-3"
              style={{ height: "1px", backgroundColor: colors.dark_blue }}
            ></div>
          </div>
        </div>
      </form>
      <div className="d-flex flex-column align-items-center px-5 mt-3">
        <p
          style={{
            color: "#7B7D7E",
          }}
        >
          Sign up with
        </p>
        <div className="d-flex gap-4 mt-3 mb-5">
          <Image
            src="/assets/images/google.svg"
            alt="google"
            width={35}
            height={35}
            style={{
              cursor: "pointer",
            }}
          />
          <Image
            src="/assets/images/facebook.svg"
            alt="google"
            width={35}
            height={35}
            style={{
              cursor: "pointer",
            }}
          />
          <Image
            src="/assets/images/apple.svg"
            alt="google"
            width={35}
            height={35}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default SignUp;
