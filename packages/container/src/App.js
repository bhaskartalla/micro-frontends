import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header'
import { createBrowserHistory } from 'history'

import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'

const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const DashboardLazy = lazy(() => import('./components/DashboardApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

const history = createBrowserHistory()

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardLazy />
              </Route>
              <Route
                path='/'
                component={MarketingLazy}
              />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  )
}

export default App
