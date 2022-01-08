import React, { useState, useEffect } from "react";

import Header from "./Header"
import GameClock from "./GameClock";

import Progress from "./Progress";
import './App.css';
import PossessionTimer from "./PosessionTimer";
import Scoreboard from "./Scoreboard";
import StatsCounters from "./StatsCounters";

const calculateProgress = (homeTime, totalTime) => {
  return (homeTime / totalTime / 100) * 10000;
};

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [homeTime, setHomeTime] = useState(0);
  const [guestTime, setGuestTime] = useState(0);
  const [hasBall, setHasBall] = useState("HOME");

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

  useEffect(() => {
    if (isRunning && isPaused === false) {
      const delta = 25;
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

  const homeProgress = calculateProgress(homeTime, time);
  const guestProgress = calculateProgress(guestTime, time);

  const homePercentage = isNaN(homeProgress) ? "0" : Math.round(homeProgress);
  const guestPercentage = isNaN(guestProgress) ? "0" : Math.round(guestProgress);

  return (
    <div>
      <Header />
      <GameClock lapse={time} handleEndGame={handleClear} />
      <Scoreboard />

      <PossessionTimer lapse={time} homeTime={homeTime} guestTime={guestTime} handleHome={handleHomeTeam} handleOut={handlePause} handleGuest={handleGuestTeam} />
      
      <Progress homePercentage={homePercentage} guestPercentage={guestPercentage} />

      <StatsCounters />
    </div>
  );
}


// TODO: Bryan - end game ask
// TODO: Bryan - clear all the scores
