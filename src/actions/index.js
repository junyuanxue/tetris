import { createAction } from 'redux-actions'

export const setCurrentTetromino = createAction('SET_CURRENT_TETROMINO')
export const moveDown = createAction('MOVE_DOWN')
export const moveLeft = createAction('MOVE_LEFT')
export const moveRight = createAction('MOVE_RIGHT')
export const startTetrominoStack = createAction('START_TETROMINO_STACK')
