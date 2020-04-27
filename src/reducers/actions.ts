import { BLOCK_COORD, NUMBERS } from './../typings/index'
import { Action, AnyAction } from 'redux'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const fillBlock = (value: NUMBERS, coords: BLOCK_COORD): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
})
export const selectBlock = (coords: BLOCK_COORD): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
