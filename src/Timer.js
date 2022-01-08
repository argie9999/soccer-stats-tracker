/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

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
    msec: (seconds % 1).toFixed(2).substring(2)
  };
};

export default function Timer({ lapse, color }) {

  const timerCss = css`
    font-size: 1.7em;
    color: ${color || '#EEEEEE'};
  `

  const { min, sec, msec } = getUnits(lapse);
  return (
    <span css={timerCss}>
      <span>{leftPad(2, min)}:</span>
      <span>{leftPad(2, sec)}.</span>
      <span>{msec}</span>
    </span>
  );
}