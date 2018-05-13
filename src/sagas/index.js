import { delay } from 'redux-saga'
import { call, put, all, takeEvery, takeLatest } from 'redux-saga/effects'


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
    yield console.log('Hello Sagas!')
}

const Api = {
    fetchUser(userId) {
        fetch(`https://api.github.com/users/${userId}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
            });
    }
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const user = yield call(Api.fetchUser, action.payload.userId);
        yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }
}

/*
Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default function* rootSaga() {
    yield all([
        helloSaga(),
        mySaga(),
        watchIncrementAsync()
    ])
}
