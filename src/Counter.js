/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from "./AppState";

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

// TODO: Bryan - finish this
const rightButtonCss = css`
  margin-right: 0;
`

export default function Counter({ title, dataType, backgroundColor, fontSize }) {
  const dispatch = useAppDispatch()
  const { home, guest } = useAppState()

  const rowBackgroundCss = css`
    background-color: ${backgroundColor};
    font-size: ${fontSize || '20px'};
  `

  const incrementHomeCount = () => {
    dispatch({ type: 'INCREMENT_HOME', dataType })
  }

  const incrementGuestCount = () => {
    dispatch({ type: 'INCREMENT_GUEST', dataType })
  }

  const decrementHomeCount = () => {
    dispatch({ type: 'DECREMENT_HOME', dataType })
  }

  const decrementGuestCount = () => {
    dispatch({ type: 'DECREMENT_GUEST', dataType })
  }

  return (
    <div css={[rowCss, rowBackgroundCss]}>
      <div css={[columnCss, rightButtonCss]}>
        <button css={buttonCss} onClick={incrementHomeCount}>+</button>
      </div>
      <div css={columnCss}>
        <span>{home[dataType]}</span>
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
        <span>{guest[dataType]}</span>
      </div>
      <div css={columnCss}>
        <button css={buttonCss} onClick={decrementGuestCount}>-</button>
      </div>
    </div>
  )
}

