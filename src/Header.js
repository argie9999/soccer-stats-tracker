/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

const headerTextCss = css`
  text-align: center;
  color: #EEEEEE;
  font-size: 1.7em;
`

const backgroundCss = css`
  background-color: #232931;
  margin: auto;
  padding: 1px;
`

export default function Header() {
  return (
    <div css={backgroundCss}>
      <h3 css={headerTextCss}>Soccer Stats Tracker</h3>
    </div>
  )
}
