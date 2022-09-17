import React, { forwardRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./Content.css";

import useWindowSize from "./hooks/useWindowSize";
import Spline from "@splinetool/react-spline";

const Content = ({ onClick }) => {
  const size = useWindowSize();
  return (
    <div className="main">
      <div className="title">
        <div className="titleLine">Full Stack </div>
        {size.width > 700 ? (
          <div className="titleLine">Software Engineer </div>
        ) : (
          <>
            <div className="titleLine">Software </div>
            <div className="titleLine">Engineer </div>
          </>
        )}
        <div className="subTitle">
          {" "}
          focused on building large-scale data streams and deploying full-stack
          applications including coding, testing, and integration.{" "}
        </div>
        <button onClick={() => onClick(3)} className="action">
          Contact
        </button>

        <div className="scroll">
          <BiChevronDown />
          Scroll down to learn more about me.
        </div>
      </div>
      <div>
        {/* <Spline
          className="rocket"
          scene="https://prod.spline.design/6aikw6oizpMvAJXH/scene.splinecode"
        /> */}
      </div>
    </div>
  );
};

export default Content;
