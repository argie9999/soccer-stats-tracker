import React from "react";

import Counter from './Counter'

const row1Color = "#EEEEEE";
const row2Color = "#CED2D6";

export default function StatsCounters() {
  return (
    <>
      <Counter title="Shots" backgroundColor={row1Color} />
      <Counter title="Shots on Goal" backgroundColor={row2Color} />
      <Counter title="Fouls" backgroundColor={row1Color} />
      <Counter title="Yellow Cards" backgroundColor={row2Color} />
      <Counter title="Red Cards" backgroundColor={row1Color} />
      <Counter title="Offsides" backgroundColor={row2Color} />
      <Counter title="Corner Kicks" backgroundColor={row1Color} />
      <Counter title="Saves" backgroundColor={row2Color} />
    </>
  )
}