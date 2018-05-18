import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

// Our worker Saga: will perform the async increment task
function* incrementAsync() {
  yield delay(300)
  yield put({ type: 'INCREMENT' })
  yield delay(600)
  yield put({ type: 'INCREMENT' })
  yield delay(900)
  yield put({ type: 'INCREMENT' })
  yield delay(1200)
  yield put({ type: 'INCREMENT' })
}ß

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* IncrementAsyncSaga() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
