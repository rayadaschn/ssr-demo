import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actionCreators from '@/store/actionCreators/counter'

function Counter() {
  // const [count, setCount] = useState(0)
  const number = useSelector((state) => state.counter.number)
  const dispatch = useDispatch()
  const increment = () => dispatch(actionCreators.add())

  return (
    <div>
      <p>You clicked {number} times</p>
      <button onClick={() => increment()}>Click me</button>
    </div>
  )
}

export default Counter
