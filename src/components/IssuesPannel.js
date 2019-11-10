import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../App';

// import Posts from './Posts.js';

class IssuesPannel extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.addIssue = this.addIssue.bind(this);
  }
  addIssue() {
    console.log('working');
    const userName = document.querySelector('.userName').value;
    const email = document.querySelector('.email').value;
    const content = document.querySelector('.content').value;
    const status = document.querySelector('.status').value;
    //this.props.store.dispatch({ type: 'ADD_ISSUE', name: userName, email: email, content: content, status: status })
  }
  render(){
    console.log(this.props.testStore);
     return (
      <div className="userspage_wrapper">
        <h2>IssuesPannel</h2>
        <div className="users_content">
          <p>Some IssuesPannel content</p>
          <div className="issueBlock">
            <input type="text" className="userName" />
            <input type="text" className="email"/>
            <input type="text" className="content"/>
            <input type="checkbox" className="status"/>
            <button onClick={this.addIssue} className="addIssue">Add Issue</button>
            <ul className="issuesList">
              {this.props.testStore.map((item, index) => 
                <li key={index}> user: { item.user}, email: { item.email }, content:  { item.content }</li>
              )}
            </ul>
          </div>
        </div>
      </div>  
    );
  }
}
export default connect(
  state => ({
    testStore: state
  }),/*it mapps state from store to props of App component*/
  dispatch => ({}), /*helps to subscribe on actions and events in store*/
)(IssuesPannel);