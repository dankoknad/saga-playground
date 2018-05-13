import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Counter extends Component {
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
    const { value, onIncrement, onDecrement, onIncrementAsync, onSomeButtonClicked } = this.props
    return (
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
        <button onClick={() => onSomeButtonClicked(this.state.userId)}>
          fetch user (in console)
        </button>
      </p>
    )
  }
}


const mapStateToProps = state => {
  return {
    value: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => { dispatch({type: 'INCREMENT'}) },
    onDecrement: () => {  dispatch({type: 'DECREMENT'}) },
    onIncrementAsync: () => {  dispatch({type: 'INCREMENT_ASYNC'}) },
    onSomeButtonClicked:   (userId) => {  dispatch({type: 'USER_FETCH_REQUESTED', payload: { userId }}) }
  }
}

export default Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)
