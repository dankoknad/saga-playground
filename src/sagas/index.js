import { delay } from 'redux-saga'
import { put, takeEvery, all } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
    yield delay(500)
    yield put({ type: 'INCREMENT' })
    yield delay(500)
    yield put({ type: 'INCREMENT' })
    yield delay(500)
    yield put({ type: 'INCREMENT' })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
    console.log('Hello Sagas 22!')
}

export default function* rootSaga() {
    yield all([
      helloSaga(),
      watchIncrementAsync()
    ])
  }