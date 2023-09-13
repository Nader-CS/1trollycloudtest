import React from "react";
import colors from "@app/common/colors";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NormalCard = ({ obj }) => {
  return (
    <div className="col-xxl-4 col-lg-6 col-md-12 my-2 ">
      <div className="d-flex flex-column bg-white rounded-3 p-4">
        <div>
          <p className="fw-semibold">
            {obj?.title
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
          </p>
        </div>
        <div
          className={`d-flex align-items-end gap-3 ${ !obj?.subTitles && "my-4 py-3"}`}
          // style={
          //   !obj?.subTitles && { margin:"40px 0 40px 0" }
          // }
        >
          <p className="p-0 m-0 display-3 fw-semibold">
            {obj?.bigNum >= 1000
              ? obj?.bigNum >= 1000000
                ? obj?.bigNum / 1000000 + "M"
                : obj?.bigNum / 1000 + "K"
              : obj?.bigNum}
          </p>
          <p className="p-0 m-0 fw-bold pb-3">{obj?.bigNumTitle}</p>
        </div>
        {obj?.subTitles && (
          <>
            <div
              className="w-100 px-3"
              style={{ height: "1px", backgroundColor: colors.light_gray }}
            ></div>
            <div
              className={`d-flex ${
                obj?.subTitles?.length === 2
                  ? "gap-5"
                  : "justify-content-between"
              }`}
            >
              {obj?.subTitles?.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex flex-column my-2 align-items-center"
                >
                  <p style={{ color: colors.light_gray }}>
                    {item?.subTitle[0].toUpperCase() + item?.subTitle.slice(1)}
                  </p>
                  <p className="p-0 m-0 fw-semibold">
                    {item?.subTitleNum.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="w-100 px-3"
              style={{ height: "1px", backgroundColor: colors.light_gray }}
            ></div>
          </>
        )}
        <div className="d-flex gap-2 my-2 align-items-center">
          <FontAwesomeIcon
            icon={obj?.flag === "inc" ? faArrowUp : faArrowDown}
            color={obj?.flag === "inc" ? "#29B12E" : "#B12929"}
          />
          <p
            className="p-0 m-0"
            style={
              obj?.flag === "inc" ? { color: "#29B12E" } : { color: "#B12929" }
            }
          >
            {obj?.percent}%
          </p>
          <p className="p-0 m-0">Since last monty</p>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
