import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    return (
      <div>
          Users!

          <div>{this.props.userCount}</div>
          <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state){
  return {users: state.users, userCount: state.users.length}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
