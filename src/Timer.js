import React from "react";

import './App.css';

const leftPad = (width, n) => {
  if ((n + "").length > width) {
    return n;
  }
  const padding = new Array(width).join("0");
  return (padding + n).slice(-width);
};

const getUnits = (lapse) => {
  const seconds = lapse / 1000;
  return {
    min: Math.floor(seconds / 60).toString(),
    sec: Math.floor(seconds % 60).toString(),
    msec: (seconds % 1).toFixed(3).substring(2)
  };
};

export default function Timer({ lapse }) {
  const { min, sec, msec } = getUnits(lapse);
  return (
    <span className="timer">
      <span>{leftPad(2, min)}:</span>
      <span>{leftPad(2, sec)}.</span>
      <span>{msec}</span>
    </span>
  );
}