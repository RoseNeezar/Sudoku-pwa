import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, unregister } from './core'
import { Content, Title, Card, Grid } from './components'
import { Provider } from 'react-redux'
import { GlobalStyles, Theme } from './styles'
import { ThemeProvider } from 'styled-components'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title data-cy="title">Sudoku</Title>
        <Card data-cy="card">
          <Grid />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
