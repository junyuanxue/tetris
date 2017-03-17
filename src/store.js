import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { syncHistoryWithStore } from 'react-router-redux'
// import { browserHistory } from 'react-router'
import { Map } from 'immutable'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = Map()

// set up redux dev tool
// const enhancer = compose(
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// )

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(thunk)
)

// export const history = syncHistoryWithStore(browserHistory, store)

// hot reloading redux
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
