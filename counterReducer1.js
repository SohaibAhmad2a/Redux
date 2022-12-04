const initialState={
    counter:0
  };
  export function CounterReducer1(state=initialState,action){
    switch(action.type){
      case 'INCREMENT':
        return {counter: state.counter + 5};
      case 'DECREMENT':
        return {counter: state.counter - 5};
      default:
        return state;
    }
  }
  