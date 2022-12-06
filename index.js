import React from "react";
import ReactDOM from "react-dom";
import {App,App1} from "./App.js";
import store from "./store.js";
import store1 from "./store1.js";
import {Provider} from 'react-redux';


ReactDOM.render(
    <div>
    <Provider store={store}> 
    <App />
    </Provider>
    <Provider store={store1}> 
    <App1 />
    </Provider>
    </div>,
  document.getElementById('root')
);