import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    }
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  };

  handleInput = (e) => {
    this.setState({userId: e.target.value})
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  render() {
    const { value, onIncrement, onDecrement, onIncrementAsync, fetchUser, user } = this.props
    return (
      <div>
        <p className="text-center">
          Count: {value}
          <br/>
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          <br/>
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={onIncrementAsync}>
            Increment async
          </button>
          <br/>
          <input onChange={this.handleInput} />{' '} 
          <button onClick={() => fetchUser(this.state.userId)}>
            fetch user (in console)
          </button>

        </p>
         <div>
         { user && <img src={user['avatar_url']} alt="Smiley face" height="42" width="42" />}

          <pre style={{fontSize: 12}}>{JSON.stringify(user, null, 2)}</pre>
        </div>
  
      </div>  
    )
  }
}


const mapStateToProps = state => {
  return {
    value: state.counter,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => { dispatch({type: 'INCREMENT'}) },
    onDecrement: () => {  dispatch({type: 'DECREMENT'}) },
    onIncrementAsync: () => {  dispatch({type: 'INCREMENT_ASYNC'}) },
    fetchUser: (userId) => {  dispatch({type: 'USER_FETCH_REQUESTED', payload: { userId }}) }
  }
}

export default App = connect(mapStateToProps, mapDispatchToProps)(App)
