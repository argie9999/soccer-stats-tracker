/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

import Counter from './Counter'
import ScoreboardNames from "./ScoreboardNames";

const containerCss = css`
  height: 100px;
  background-color: #EEEEEE;
`

export default function Scoreboard() {
  return (
    <div css={containerCss}>
      <ScoreboardNames />
      <Counter title="Goals" dataType="goals" fontSize="2.5em" />
    </div>
  )
}
