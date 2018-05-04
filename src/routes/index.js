import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import React from 'react'
import Loadable from 'react-loadable'
import styled from 'styled-components'
import { browserHistory, NeoRoutes } from 'helpers'

import { Loader } from 'components'

const Login = Loadable({
  loader: () => import('./Login' /* webpackChunkName: 'login' */),
  loading: Loader
})

const Signup = Loadable({
  loader: () => import('./Signup' /* webpackChunkName: 'signup' */),
  loading: Loader
})

const PageNotAvailable = Loadable({
  loader: () => import('./PageNotAvailable' /* webpackChunkName: 'page404' */),
  loading: Loader
})

const AppRoutes = (props) => (
  <Router history={props.history}>
    <RouteWrapper>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/404' component={PageNotAvailable} />
        <Redirect from='*' to='/404' />
      </Switch>
    </RouteWrapper>
  </Router>
)

const RouteWrapper = styled.div`
  height: inherit;
  width: inherit;
`

export default AppRoutes
