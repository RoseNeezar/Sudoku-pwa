import { GRID, NUMBERS } from 'typings'

interface IInputs {
  grid: GRID
  row: number
  value: NUMBERS
}
function isInRow({ grid, row, value }: IInputs): boolean {
  return grid[row].includes(value)
}

export default isInRow
