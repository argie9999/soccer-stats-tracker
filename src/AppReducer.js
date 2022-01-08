const initialStats = {
  lapse: 0,
  goals: 0,
  shots: 0,
  shotsOnGoal: 0,
  fouls: 0,
  yellowCards: 0,
  redCards: 0,
  offsides: 0,
  cornerKicks: 0,
  saves: 0 
}

const AppInitialState = {
  lapse: 0,
  home: {...initialStats},
  guest: {...initialStats}
}

const AppReducer = (state, action) => {
  const change = { ...state }
  switch (action.type) {
    case 'INCREMENT': {
      change[action.team][action.dataType] = change[action.team][action.dataType] + 1
      break
    }
    case 'DECREMENT': {
      change[action.team][action.dataType] = Math.max(change[action.team][action.dataType] - 1, 0)
      break
    }
    case 'END_GAME': {
      change.lapse = 0;
      change.home = initialStats;
      change.guest = initialStats;
      break;
    }
    default: {
      console.error(`ERROR: Unhandled action type: ${action.type}`) // eslint-disable-line
    }
  }

  return { ...change }
}

export { AppInitialState, AppReducer }