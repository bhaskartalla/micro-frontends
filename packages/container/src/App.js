import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const generateGenerateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const App = () => {
  return (
    <StylesProvider generateGenerateClassName={generateGenerateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
