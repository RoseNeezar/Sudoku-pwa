import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore, register } from './core'
import { Content, Title, Card, Grid, Numbers } from './components'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyles, Theme } from './styles'
import { ThemeProvider } from 'styled-components'
import NewButton from 'components/new-button'

const { persistor, store } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

register()
