/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from '@emotion/react'

import Timer from "./Timer";
import './App.css';

const calculateProgress = (homeTime, totalTime) => {
  return (homeTime / totalTime / 100) * 10000;
};

export default function App() {
  const [isRunning, setIsRunning] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(true);
  const [time, setTime] = React.useState(0);
  const [homeTime, setHomeTime] = React.useState(0);
  const [guestTime, setGuestTime] = React.useState(0);
  const [hasBall, setHasBall] = React.useState("HOME");

  const handleClear = (event) => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(0);
    setHomeTime(0);
    setGuestTime(0);
  };

  const handlePause = (event) => {
    setIsPaused(true);
  };

  const handleHomeTeam = (event) => {
    setHasBall("HOME");
    setIsRunning(true);
    setIsPaused(false);
  };

  const handleGuestTeam = (event) => {
    setHasBall("GUEST");
    setIsRunning(true);
    setIsPaused(false);
  };

  const progressCss = css`
    height: 30px;
    border: 1px solid black;
    position: relative;
    background-color: white;

    &:after {
      content: "";
      position: absolute;
      background: red;
      top: 0;
      bottom: 0;
      left: 0;
      width: ${calculateProgress(homeTime, time)}%;
    }
  `

  React.useEffect(() => {
    if (isRunning && isPaused === false) {
      const delta = 25; // 25 ms
      let intervalId = setInterval(() => {
        setTime((time) => time + delta);

        if (hasBall === "HOME") {
          setHomeTime((homeTime) => homeTime + delta);
        } else if (hasBall === "GUEST") {
          setGuestTime((guestTime) => guestTime + delta);
        }
      }, 25);

      return () => clearInterval(intervalId);
    }
  }, [isRunning, isPaused, hasBall]);

  const homePercentage = calculateProgress(homeTime, time);
  const guestPercentage = calculateProgress(guestTime, time);

  const homeValue = isNaN(homePercentage) ? "0" : Math.round(homePercentage);
  const guestValue = isNaN(guestPercentage) ? "0" : Math.round(guestPercentage);

  return (
    <div>
      <div className="button-container">
        <h2>Game Clock</h2>
        <Timer lapse={time} />
        <button onClick={handleClear}>Clear</button>
        <button onClick={handlePause}>Pause</button>
      </div>
      <hr />
      <div className="button-container">
        <h2>Possession Timer</h2>

        <Timer lapse={homeTime} />
        <button onClick={handleHomeTeam}>Home</button>
        <button onClick={handleGuestTeam}>Guest</button>
        <Timer lapse={guestTime} />

        <div className="team-labels">
          <span className="team-label-name">Home: {homeValue}%</span>
          <span className="team-label-name">Guest: {guestValue}%</span>
        </div>
        <div css={progressCss}></div>
      </div>
    </div>
  );
}
