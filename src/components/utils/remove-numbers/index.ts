import { GRID } from 'typings'
import getRandomIndex from '../get-random-index'
import copyGrid from '../copy-grid'
import global from 'global'
import solveGrid from '../solve-grid'

function removeNumbers(grid: GRID, attempts = 50): GRID {
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }

    const backup = grid[row][col]
    grid[row][col] = 0
    const gridCopy = copyGrid(grid)
    global.counter = 0
    solveGrid(gridCopy)

    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts--
    }
  }

  return grid
}

export default removeNumbers
