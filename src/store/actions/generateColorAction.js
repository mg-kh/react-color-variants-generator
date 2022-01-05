import { GENERATE_COLOR } from '../actionTypes'

export const generateColor = (colors = []) => {
  return {
    type: GENERATE_COLOR,
    payload: colors,
  }
}
