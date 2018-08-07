import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import Home from '../pages/home/index'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const location = history.location
const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </HashRouter>
)

export default routes
