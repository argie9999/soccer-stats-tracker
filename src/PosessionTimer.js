/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import Timer from "./Timer";

const flexCss = css`
  padding-top: 10px;
  display: flex;
  justify-content: space-evenly;
`

const containerCss = css`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #CED2D6;
`

const titleCss = css`
  text-align: center;
  font-size: 1.4em;
`

const buttonCss = css`
    height: 30px;
    border: none;
    color: #EEEEEE;
    padding: 4px 10px;
`

const redCss = css`
  background-color: #AA5050;
`

const greenCss = css`
  background-color: #65C18A;
`

export default function PossessionTimer({ lapse, homeTime, guestTime, handleHome, handleOut, handleGuest }) {
  return (
    <div css={containerCss}>
      <div css={titleCss}>Possession Timer</div>
      <div css={flexCss}>
        <Timer lapse={homeTime} color="#232931" />
        <button css={[buttonCss, greenCss]} onClick={handleHome}>Home</button>
        <button css={[buttonCss, redCss]} onClick={handleOut}>Out</button>
        <button css={[buttonCss, greenCss]} onClick={handleGuest}>Guest</button>
        <Timer lapse={guestTime} color="#232931" />
      </div>
    </div>
  )
}

// TODO: Bryan - rename "lapse" to gameTime?
// TODO: Bryan - global state? dispatch