import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

// import redux
import { createStore } from 'redux';

// здесь вместо initialState должен быть JSON с данными с сервера
const initialState = [
  { user: 'user 1', email: 'example@example.com', content: 'content from first user' },
  { user: 'user 2', email: 'example@example.com', content: 'content from second user' }
]
// create a function, for changing store, where first argument is initial state, second one is action
// function issueTracker(state = [], action) {
  function issueTracker(state = initialState, action) { //it is called reducer and 
    console.log(action);
  //will show two actions: 1. {type: "@@redux/INITf.8.0.v.d.j"} - action of redux initialization
  // and 2. {type: "ADD_ISSUE", record: "something"}
  //state for change store: 
  if (action.type === "ADD_ISSUE") {
    return [
      ...state, //spread added value to array and returns new array and it's important, because we can't 
      //change store(it's immutable) and only can always create new 'cast' with new state of store
      // action.record,
      // action.name,
      // action.email,
      // action.content,
      // action.status
      action.userData
    ];
  } else if (action.type === "REDACT_ISSUE") {
    
  }
  return state;
}
// initialize store and pass into issueTracker function as an argument
const store = createStore(issueTracker, 
                          window.__REDUX_DEVTOOLS_EXTENSION__ && 
                          window.__REDUX_DEVTOOLS_EXTENSION__()); //the second 
//argument is a devtools for chrome and the write means, if window__RDE not undefined, 
//it will be used as a second argument
//check if we are able to get store state (which initially is empty array)

//subscribe on all changes in store by method subscribe
store.subscribe(()=>{
  console.log('subscribe', store.getState());
})
//for changing values in store use dispatch function (the only way for changing something in store)
//field is type. for clearer understanding: dispatch is an event (action), and type is a type of the event
// store.dispatch({ type: 'ADD_ISSUE', record: ' something else' });

ReactDOM.render(
  <Provider store={store}>{/*provides store to all (!)smart child components*/}
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
