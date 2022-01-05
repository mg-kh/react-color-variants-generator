import { GENERATE_COLOR } from '../actionTypes'

const initState = {
  colors: [],
}

export const genetateColorReducer = (state = initState, action) => {
  switch (action.type) {
    case GENERATE_COLOR:
      return {
        ...state,
        colors: action.payload,
      }

    default:
      return state
  }
}
