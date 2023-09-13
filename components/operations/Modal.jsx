"use client";
import classes from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import NormalCard from "./NormalCard";

function Modal(props) {
  return (
    <div
      className={classes["overlay"]}
      onClick={() => props.isModalShown(false)}
    >
      <div
        className={classes.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={`${classes.col} ${classes.info}`}>
          <h4 className="mb-5">{props.data.name}</h4>
          <div>
            <div className={classes["info-content"]}>
              <p className={classes["info-text"]}>Start Date :</p>
              <span className="text-bold">30/6/2022</span>
            </div>
            <div className={classes["info-content"]}>
              <p className={classes["info-text"]}>Age :</p>
              <span className="text-bold">23</span>
            </div>
            <div className={classes["info-content"]}>
              <p className={classes["info-text"]}> Nationalty :</p>
              <span className="text-bold">Egyptian</span>
            </div>
            <div className={classes["info-content"]}>
              <p className={classes["info-text"]}>Vehicle type :</p>
              <span className="text-bold">scooter</span>
            </div>
          </div>
        </div>
        <div className={`row ${classes.col} `}>
          {/* <div className={classes.card}> */}
          <NormalCard />
          {/* </div> */}
          {/* <div className={classes.card}> */}
          <NormalCard />
          {/* </div> */}
          {/* <div className={classes.card}> */}
          <NormalCard />
          {/* </div> */}
          {/* <div className={classes.card}> */}
          <NormalCard />
          {/* </div> */}
        </div>
        <span className={classes["close-icon"]}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={() => {
              props.isModalShown(false);
            }}
            cursor="pointer"
          />
        </span>
      </div>
    </div>
  );
}

export default Modal;
