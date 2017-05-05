import React from "react";
import PropTypes from "prop-types";
import UserDetail from "./UserDetail";


function UserList(props) {
  return (
    <div>
      {props.users.map((user, key) => {
        return (
          <UserDetail
            user={user}
            onSelect={props.onUserSelect}
            onDelete={(event, user) => {
              console.log(user);
              props.onUserDelete(props.user);
            }}
            key={key} />
        );
      })}
    </div>
  );
}




UserList.propTypes = {
  users: PropTypes.array
};

export default UserList;
