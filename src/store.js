import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = {

}

// set up redux dev tool
const enhancer = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancer)

export const history = syncHistoryWithStore(browserHistory, store)

export default store
