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
  home: {...initialStats, name: 'HOME' },
  guest: {...initialStats, name: 'GUEST' }
}

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_HOME': {
      return {
        ...state,
        home: {
          ...state.home,
          [action.dataType]: state.home[action.dataType] + 1
        }
      };
    }
    case 'DECREMENT_HOME': {
      return {
        ...state,
        home: {
          ...state.home,
          [action.dataType]: Math.max(state.home[action.dataType] - 1, 0)
        }
      };
    }
    case 'INCREMENT_GUEST': {
      return {
        ...state,
        guest: {
          ...state.guest,
          [action.dataType]: state.guest[action.dataType] + 1
        }
      };
    }
    case 'DECREMENT_GUEST': {
      return {
        ...state,
        guest: {
          ...state.guest,
          [action.dataType]: Math.max(state.guest[action.dataType] - 1, 0)
        }
      };
    }
    case 'END_GAME': {
      return {
        ...AppInitialState
      }
    }
    default: {
      console.error(`ERROR: Unhandled action type: ${action.type}`) // eslint-disable-line
    }
  }
}

export { AppInitialState, AppReducer }