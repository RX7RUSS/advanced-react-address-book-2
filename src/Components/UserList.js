import React, { Component } from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail";


class UserList extends Component {
  // handleUserSelect (user) {
  //   console.log(this)
  //   console.log(user)
  // }

  render(props) {
    return (
      <div>
        {this.props.users.map((user, key) => {
          return (
            <UserDetail
              user={user}
              onClick={() => this.props.onUserSelect(user)}
              // onDelete={(event, user) => {
              //   console.log(user);
              //   props.onUserDelete(props.user);
              // }}
              key={key} />
          );
        })}
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default UserList;
