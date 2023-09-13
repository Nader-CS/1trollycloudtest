import React from "react";
// import colors from "@app/common/colors";
// import styles from "../../ourProducts.module.css";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ data, name }) => {
  console.log(name)
  return (
    <>
      {data[0] && (
        <div className="d-flex gap-3" style={{ padding: "0 40px 80px 40px" }}>
          <Link href={`/ourProducts/${name}`} className="mt-4">
            <Image
              src="/assets/images/chevronLeft.png"
              alt="left"
              width={15}
              height={15}
            />
          </Link>
          <div className="container">
            <div className="row">
              <div className="d-flex flex-column col-lg-6 col-12">
                <div className="d-flex flex-lg-row flex-column gap-3 align-items-lg-center align-items-start">
                  <div>
                    <Image
                      src={data[0].logo}
                      alt="logo"
                      width={90}
                      height={75}
                    />
                  </div>
                  <div className="d-flex flex-column">
                    <p className="fw-bold m-0" style={{ fontSize: "24px" }}>
                      {data[0].title}
                    </p>
                    <p className="m-0">{data[0].headline}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="mt-3">
                    <span className="fw-bold">
                      {data[0].firstParagraph.split(" ")[0]}{" "}
                    </span>
                    <span>
                      {data[0].firstParagraph.substring(
                        data[0].firstParagraph.indexOf(" ") + 1
                      )}
                    </span>
                  </p>
                  <p className="">{data[0].secondParagraph}</p>
                  {data[0].subTitle && (
                    <div>
                      <p className="fw-bold">{data[0].subTitle}</p>
                      <ul>
                        {data[0].points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {!data[0].thirdParagraph && (
                    <Link
                      href={`/ourProducts/${name}`}
                      className="nav-link text-decoration-underline fw-bold"
                      style={{ display: "inline-block", width: "fit-content" }}
                    >
                      Subscribe
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <Image
                  src={data[0].img1}
                  layout="responsive"
                  alt="img1"
                  width={700}
                  height={700}
                  className="w-100 h-75"
                />
              </div>
            </div>
            <div className="row">
              {data[0].img2 && (
                <div className="col-lg-6 col-12">
                  <Image
                    src={data[0].img2}
                    alt="img2"
                    width={500}
                    height={400}
                    className="w-100 h-100"
                  />
                </div>
              )}
              <div className="col-lg-6 col-12 d-flex flex-column justify-content-between">
                <p className="mt-5">{data[0].thirdParagraph}</p>
                {data[0].thirdParagraph && (
                  <Link
                    href={`/ourProducts/${name}`}
                    className="nav-link text-decoration-underline fw-bold"
                    style={{ display: "inline-block", width: "fit-content" }}
                  >
                    Subscribe
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
