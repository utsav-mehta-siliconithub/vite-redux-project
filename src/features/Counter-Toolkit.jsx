
import React, { useState } from 'react';
import { decremented, incremented, reset, amountAdded } from './counter-slice'
import { useAppDispatch, useAppSelector } from '../app/hooks';
const CounterToolkit = () => {

  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch();
  const [increment_by, setincrement_by] = useState();

  const inputHandleChange = (e) => {
    setincrement_by(e.target.value)
  }
  return (
    <>
      <p>count is :{counter}</p>
      <button type="button"
        onClick={() => dispatch(incremented())}
      >
        Increment
      </button>
      <button type="button"
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>
      <button type="button"
        onClick={() => dispatch(decremented())}
      >
        Decrement
      </button>
      <input type="number" name="increment_by" onChange={(e) => inputHandleChange(e)} />
      <button type="button" onClick={() => dispatch(amountAdded(Number(increment_by)))}>
        Amount Added
      </button>
    </>
  )
}

export default CounterToolkit 