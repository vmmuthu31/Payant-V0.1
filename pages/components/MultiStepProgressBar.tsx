import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = (props) => {
  return (
    <ProgressBar
      percent={(props.step + 1) * 25}
      filledBackground="#664de5"
      height="2px"
      width="500px"
      style={{ margin: "auto" }}
    >
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          ></div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          ></div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",

              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          ></div>
        )}
      </Step>
      <Step transition="scale">
        {({ accomplished, index }) => (
          <div
            style={{
              height: "15px",
              width: "15px",
              border: "1px solid lightgray",
              borderRadius: "50%",
              backgroundColor: `${accomplished ? "#664de5" : null}`
            }}
            className={`step ${accomplished ? "completed" : null}`}
          ></div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
