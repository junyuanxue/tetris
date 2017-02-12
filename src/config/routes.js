import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from '../store'

import App from '../components/App'
import Board from '../components/Board'

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Board} />
      </Route>
    </Router>
  </Provider>
)

export default routes
