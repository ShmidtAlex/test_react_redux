import React, { Component } from 'react';
import { connect } from 'react-redux'; //decorator, it wraps App component and add two extra functions 
import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IssuesPannel from './components/IssuesPannel';
import About from './components/About';
import Home from './components/Home';
import ErrorComp from './components/ErrorComp';


class App extends Component {
  render() {
    //console.log(this.props.testStore);//will show store from index.js
    return (
      <div className="App">
        
        {/*<div className="users_content">
          <p>Some IssuesPannel content</p>
          <div className="issueBlock">
            <input type="text" className="userName" />
            <input type="text" className="email"/>
            <input type="text" className="content"/>
            <input type="checkbox" className="status"/>
               <button onClick={this.addIssue} className="addIssue">Add Issue</button>
               {/*<button className="addIssue">Add Issue</button>
            <ul className="issuesList">
              {this.props.testStore.map((user, index) => 
                <li key={index}>{ user }</li>
              )}
            </ul>
          </div>
        </div>*/}
       <Router>
      <div className="nav_wrapper"> 
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/issuespannel">issuesPannel</Link>
                </li>
              </ul>
            </nav>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/issuespannel">
                  <IssuesPannel props={this.props} />
                </Route>
                <Route path="/" exact>
                  <Home />
                </Route>
               <Route >
                <ErrorComp/>
              </Route>           
            </Switch>
          </div>
        </Router> 
      </div>
  );
  }
}
export default connect(
  state => ({
    testStore: state
  }),/*it mapps state from store to props of App component*/
  dispatch => ({}), /*helps to subscribe on actions and events in store*/
)(App);
/*let addIssueBut;
setTimeout(function() {
    addIssueBut = document.querySelectorAll('.addIssue')[0];       
}, 2000);
setTimeout(function(){
console.log(addIssueBut);
        addIssueBut.addEventListener('click', () => {
    const userName = document.querySelectorAll('.userName')[0].value;
    const email = document.querySelectorAll('.email')[0].value;
    const content = document.querySelectorAll('.content')[0].value;
    const status = document.querySelectorAll('.status')[0].checked;

    console.log(userName, email, content, status);
    store.dispatch({ type: 'ADD_ISSUE', name: userName, email: email, content: content, status: status }); //dispatch needs input as an object, where the only necessary

  })
}, 3000)*/



