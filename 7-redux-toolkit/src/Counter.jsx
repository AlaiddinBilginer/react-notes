import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

const Counter = () => {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      {value > 0 && <button onClick={() => dispatch(decrement())}>decrement</button>}
    </div>
  );
};

export default Counter;
