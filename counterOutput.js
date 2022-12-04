import React from 'react';
import {useSelector} from 'react-redux';

export function CounterOutput(){
  const counter = useSelector((states)=>states);
  return <div>Counter Value: {counter}</div>;
}
export function CounterOutput1(){
  const counter = useSelector((statesa)=>statesa.counter);
  return <div>Counter Value: {counter}</div>;
}