import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = () => {
  const count = useSelector((state: RootState) => state.counter.count);
}

export default CounterContainer;