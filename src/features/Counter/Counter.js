import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { decrement, increment } from './counterSlice'
import './Counter.scss'

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <Button        
        aria-label="Increment value"
        className='m-2'
        variant="outline-primary"
        onClick={() => dispatch(increment())}
      >
        Increment
      </Button>
      <span className='m-4 p-2'>{count}</span>
      <Button
        aria-label="Decrement value"
        className='m-2'
        variant="outline-success"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </Button>
    </div>
  )
}

export default Counter