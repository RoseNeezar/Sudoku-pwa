import React, { useCallback } from 'react'
import { Button } from 'components'
import { useDispatch } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'
import { createGrid } from 'reducers'
const NewButton = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const createNewGrid = useCallback(() => {
    if (window.confirm('Start new game?')) {
      dispatch(createGrid())
    }
  }, [dispatch])
  return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewButton
