import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    }
    this.inputRef = React.createRef();
  }

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  };

  handleInput = (e) => {
    this.setState({userId: e.target.value})
    if(e.which === 13) {
      this.handleFetch()
    }
  }

  incrementIfOdd= () => {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  handleFetch = () => {
    if(this.state.userId) {
      this.props.fetchUser(this.state.userId)
      this.setState({userId: ''})
      this.inputRef.current.value= '';
      this.inputRef.current.focus();
    }
  }

  render() {
    const { value, onIncrement, onDecrement, onIncrementAsync, user } = this.props
    return (
      <div>
        <p className="text-center">
          Count: {value}
          <br/><br/>
          <button onClick={onIncrement}>
            +
          </button>
          {' '}
          <button onClick={onDecrement}>
            -
          </button>
          <br/><br/>
          <button onClick={this.incrementIfOdd}>
            Increment if odd
          </button>
          {' '}
          <button onClick={onIncrementAsync}>
            Increment async
          </button>
          <br/><br/>
          <input
            onKeyUp={this.handleInput}
            ref={this.inputRef} 
          />{' '} 
          <button onClick={this.handleFetch}>
            fetch user
          </button>

        </p><br/><br/>
        <div style={{maxWidth: 550, margin: '0 auto'}}>
          { user && user['avatar_url'] && <img src={user['avatar_url']} alt="Smiley face" height="42" width="42" />}

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
