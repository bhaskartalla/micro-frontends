import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/pricing'
              component={Pricing}
            />
            <Route
              path='/'
              component={Landing}
            />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}

export default App
