/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from '@emotion/react';

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
`

const nameCss = css`
font-size: 20px;
padding-top: 15px;
`

export default function ScoreboardNames() {
  const [homeName, setHomeName] = React.useState('HOME')
  const [guestName, setGuestName] = React.useState('GUEST')

  const editHome = () => {
    const newName = prompt('Set Home team name');
    setHomeName(newName)
  }

  const editGuest = () => {
    const newName = prompt('Set Home team name');
    setGuestName(newName)
  }

  return (
    <div css={rowCss}>
      <div css={columnCss}>
        <button css={nameCss} onClick={editHome}>{homeName}</button>
      </div>
      <div css={columnCss}>
        <button css={nameCss} onClick={editGuest}>{guestName}</button>
      </div>
    </div>
  )
}
