import React from 'react';
import {useSelector} from 'react-redux';

export function CounterOutput(){
  const counter = useSelector((state)=>state.counter);
  return <div>Counter Value: {counter}</div>;
}