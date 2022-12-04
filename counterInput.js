import React from "react";
import {useDispatch} from "react-redux"

export function CounterInput(){
  const dispatch= useDispatch();
  return (
    <>
    <button onClick={()=> dispatch({type: 'INCREMENT'})}>INCREMENT</button>
    <button onClick={()=> dispatch({type: 'DECREMENT'})}>DECREMENT</button>
    </>
  )
}

