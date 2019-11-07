import React from 'react';
import logo from './logo.svg';
import './App.css';
// import redux
import { createStore } from 'redux';
// create a function, for changing store, where first argument is 
function issueTracker(state = [], action) {
  console.log(action);
  //will show two actions: 1. {type: "@@redux/INITf.8.0.v.d.j"} - action of redux initialization
  // and 2. {type: "ADD_ISSUE", record: "something"}
  //state for change store: 
  if (action.type === "ADD_ISSUE") {
    return [
      ...state, //spread adds value to array and returns new array and it's important, because we can't 
      //change store(it's immutable) and only can always create new 'cast' with new state of store
      action.record
    ];
  }

  return state;
}
// initialize store and pass into issueTracker function as an argument
const store = createStore(issueTracker);
//check if we are able to get store state (which initially is empty array)
console.log(store.getState());
//subscribe on all changes in store by method subscribe
store.subscribe(()=>{
  console.log('subscribe', store.getState())
})
//for changing values in store use dispatch function (the only way for changing something in store)
store.dispatch({ type: 'ADD_ISSUE', record: 'something' }); //dispatch needs input as an object, where the only necessary
//field is type. for clearer understanding: dispatch is an event (action), and type is a type of the event
store.dispatch({ type: 'ADD_ISSUE', record: ' something else' });
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

