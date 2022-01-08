import React from "react";

import Counter from './Counter'

const row1Color = "#EEEEEE";
const row2Color = "#CED2D6";

export default function StatsCounters() {
  return (
    <>
      <Counter title="Shots" dataType="shots" backgroundColor={row1Color} />
      <Counter title="Shots on Goal" dataType="shotsOnGoal" backgroundColor={row2Color} />
      <Counter title="Fouls" dataType="fouls" backgroundColor={row1Color} />
      <Counter title="Yellow Cards" dataType="yellowCards" backgroundColor={row2Color} />
      <Counter title="Red Cards" dataType="redCards" backgroundColor={row1Color} />
      <Counter title="Offsides" dataType="offsides" backgroundColor={row2Color} />
      <Counter title="Corner Kicks" dataType="cornerKicks" backgroundColor={row1Color} />
      <Counter title="Saves" dataType="saves" backgroundColor={row2Color} />
    </>
  )
}