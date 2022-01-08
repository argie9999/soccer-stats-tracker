/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

const backgroundCss = css`
  background-color: #CED2D6;
  padding: 10px;
`

const rowCss = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const columnCss = css`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  text-align: center;
  align-self: center;
`

export default function Progress({ homePercentage, guestPercentage }) {

  const progressCss = css`
    margin: 20px auto;
    padding: 0;
    width: 90%;
    height: 30px;
    overflow: hidden;
    background: #AA5050;
    border-radius: 7px;
  `
  
  const barCss = css`
    position: relative;
    float: left;
    height: 100%;
    background: #7BBEC9;
  `
  
  const percentCss = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 0;
  `

  return (
    <div css={[backgroundCss, rowCss]}>
      <span css={[columnCss]}>{homePercentage}%</span>
        <div css={progressCss}>
	        <div css={barCss} style={{ "width": `${homePercentage}%` }}>
		        <p css={percentCss}></p>
	        </div>
        </div>
      <span css={[columnCss]}>{guestPercentage}%</span>
    </div>
  )
}