import { all } from 'redux-saga/effects'
import { helloSaga } from './helloSaga'
import { fetchUserSaga } from './fetchUserSaga'
import { IncrementAsyncSaga } from './IncrementAsyncSaga'

export default function* rootSaga() {
  yield all([
    helloSaga(),
    fetchUserSaga(),
    IncrementAsyncSaga()
  ])
}
