"use client";
import colors from "@app/common/colors";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const LogIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <main style={{ paddingTop: "150px" }} className="px-lg-5 px-md-3 px-1">
      <form>
        <div className="container d-flex flex-column px-5">
          <div className="">
            <p className="display-3 fw-bold">Log In</p>
          </div>
          <div className="mt-5">
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

          <div className="mt-5" style={{ position: "relative" }}>
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
          <Link
            href="/signIn"
            className="nav-link p-0 mt-3"
            style={{
              color: "#7B7D7E",
            }}
          >
            Forget Password?
          </Link>
          <button
            type="submit"
            className="nav-link my-5 text-decoration-underline align-self-end fw-medium fs-5"
          >
            Log in
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
      </form>
      <div className="d-flex flex-column align-items-center px-5 mt-5">
        <p
          style={{
            color: "#7B7D7E",
          }}
        >
          Sign in with
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
      <div className="d-flex align-items-center justify-content-around mb-5">
        <p
          style={{
            color: "#7B7D7E",
          }}
          className="p-0 m-0"
        >
          Don’t have an account?
        </p>
        <Link
          href="/signUp"
          className="nav-link p-0  text-decoration-underline fw-medium fs-5"
        >
          Sign up
        </Link>
      </div>
    </main>
  );
};

export default LogIn;
