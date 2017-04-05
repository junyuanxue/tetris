import constants from '../constants/constants'
const { SCORE_PER_ROW } = constants

const calculateScoreGained = numOfRowsToClear => {
  // ---- TODO ----
  // ADD MORE COMPLICATED SCORING
  return numOfRowsToClear * SCORE_PER_ROW
}

export default calculateScoreGained
