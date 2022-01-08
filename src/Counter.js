/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css } from '@emotion/react';

const rowCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
`

const columnCss = css`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: center;
  align-self: center;
`

const buttonCss = css`
  height: 100%;
  width: 100%;
  font-size: 30px;
`

const rightButtonCss = css`
  margin-right: 0;
`

export default function Counter({ title, backgroundColor, fontSize }) {
  const [homeCount, setHomeCount] = useState(0);
  const [guestCount, setGuestCount] = useState(0);

  const rowBackgroundCss = css`
    background-color: ${backgroundColor};
    font-size: ${fontSize || '20px'};
  `

  const incrementHomeCount = () => {
    setHomeCount((count) => count + 1)
  }

  const incrementGuestCount = () => {
    setGuestCount((count) => count + 1)
  }

  const decrementHomeCount = () => {
    setHomeCount((count) => Math.max(count - 1, 0))
  }

  const decrementGuestCount = () => {
    setGuestCount((count) => Math.max(count - 1, 0))
  }

  return (
    <div css={[rowCss, rowBackgroundCss]}>
      <div css={[columnCss, rightButtonCss]}>
        <button css={buttonCss} onClick={incrementHomeCount}>+</button>
      </div>
      <div css={columnCss}>
        <span>{homeCount}</span>
      </div>
      <div css={columnCss}>
        <button css={buttonCss} onClick={decrementHomeCount}>-</button>
      </div>
      <div css={columnCss}>
        <span>{title}</span>
      </div>
      <div css={columnCss}>
        <button css={buttonCss} onClick={incrementGuestCount}>+</button>
      </div>
      <div css={columnCss}>
        <span>{guestCount}</span>
      </div>
      <div css={columnCss}>
        <button css={buttonCss} onClick={decrementGuestCount}>-</button>
      </div>
    </div>
  )
}

