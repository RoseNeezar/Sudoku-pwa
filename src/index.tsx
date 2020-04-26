import React from 'react'
import ReactDOM from 'react-dom'
import { ServiceW } from './core'
import { Content, Title, Card, Grid } from './components'

import { GlobalStyles, Theme } from './styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Sudoku</Title>
      <Card data-cy="card">
        <Grid />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

ServiceW.unregister()
