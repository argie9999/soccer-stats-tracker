/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

import Timer from './Timer'

const textCss = css`
  font-size: 1.7em;
  color: #EEEEEE;
`

const flexCss = css`
  display: flex;
  justify-content: space-evenly;
  background-color: #393E46;
  height: 60px;
  margin: auto;
  padding: 10px;
`

const endGameButtonCss = css`
    height: 25px;
    background-color: #AA5050;
    border-radius: 7px;
    border: none;
    color: #EEEEEE;
    padding: 2px 9px 2px 9px;
`

export default function GameClock({ lapse, handleEndGame }) {
  return (
    <div css={flexCss}>
      <span css={textCss}>Game Clock</span>
      <Timer lapse={lapse} />
      <button onClick={handleEndGame} css={endGameButtonCss}>End Game</button>
    </div>
  )
}
