import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import App from '../pages/app'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const location = history.location
const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={App} />
    </div>
  </HashRouter>
)

export default routes
