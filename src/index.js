import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import Counter from './components/Counter'
import counter from './reducers'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  counter,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
)

render()
store.subscribe(render)
