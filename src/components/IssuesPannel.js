import React, { Component } from 'react';
import { connect } from 'react-redux';
// import store from '../App';

// import Posts from './Posts.js';

class IssuesPannel extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.addIssue = this.addIssue.bind(this);
    // this.userName = '';
  }
  addIssue() {
    console.log('working');
    let obj = {};
        obj.user = this.inputName.value;
        obj.email = this.inputEmail.value;
        obj.content = this.inputContent.value;
        // obj.status = this.inputStatus.checked;
    this.props.clickAddIssue(obj);
    this.inputName.value = '';//it clears input
    this.inputEmail.value = '';
    this.inputContent.value = '';
    this.inputStatus.checked = '';
  }
  render(){
    console.log(this.props.testStore);
     return (
      <div className="userspage_wrapper">
        <h2>IssuesPannel</h2>
        <div className="users_content">
          <p>Some IssuesPannel content</p>
          <div className="issueBlock">
            <input type="text" className="userName" ref={(input) => { this.inputName = input }}/>{/*this way we
            assign a link for this.userName to a DOM element*/}
            <input type="text" className="email" ref={(input) => { this.inputEmail = input }}/>
            <input type="text" className="content" ref={(input) => { this.inputContent = input }}/>
            <input type="checkbox" className="status" ref={(input) => { this.inputStatus = input }}/>
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
  dispatch => ({
    clickAddIssue: (issueData) => {

      dispatch({ type: 'ADD_ISSUE', userData: issueData })
    }
  }), /*helps to subscribe on actions and events in store*/
)(IssuesPannel);