import React from "react";

import './App.css';
import { AppProvider } from "./AppState";
import StatsTracker from "./StatsTracker";

export default function App() {

  return (
    <AppProvider>
      <StatsTracker />
    </AppProvider>
  );
}


// TODO: Bryan - end game ask
// TODO: Bryan - clear all the scores
