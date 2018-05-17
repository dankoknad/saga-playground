import { combineReducers } from 'redux'
import { counter } from './counterReducer'
import { user } from './fetchUserReducer'

export default combineReducers({
  counter,
  user: user
})
