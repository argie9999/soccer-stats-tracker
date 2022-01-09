import React, { useState, useEffect, useRef } from "react";

import Header from "./Header"
import GameClock from "./GameClock";

import Progress from "./Progress";
import PossessionTimer from "./PosessionTimer";
import Scoreboard from "./Scoreboard";
import StatsCounters from "./StatsCounters";
import { useAppDispatch } from "./AppState";

const calculateProgress = (homeTime, totalTime) => {
  return (homeTime / totalTime / 100) * 10000;
};

export default function StatsTracker() {
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [homeTime, setHomeTime] = useState(0);
  const [guestTime, setGuestTime] = useState(0);
  const [hasBall, setHasBall] = useState("HOME");

  const dispatch = useAppDispatch()

  const handleUserKeyPress = (e) => {
    if (e.keyCode === 72 || e.keyCode === 37) { // h for home, or left arrow
      handleHomeTeam()
    }
    else if (e.keyCode === 71 || e.keyCode === 39) { // g for guest, or right arrow
      handleGuestTeam()
    }
    else if (e.keyCode === 78 || e.keyCode === 40) { // n for pause, or down arrow
      handlePause()
    }
    else {
      console.log(e.keyCode)
    }
  }

  const cbRef = useRef(handleUserKeyPress);
  useEffect(() => { cbRef.current = handleUserKeyPress; }); // update after each render
  useEffect(() => {
      const cb = e => cbRef.current(e); // then use most recent cb value
      window.addEventListener("keydown", cb);
      return () => { window.removeEventListener("keydown", cb) };
  }, []);

  const handleClear = (event) => {
    dispatch({ type: 'END_GAME'})
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
