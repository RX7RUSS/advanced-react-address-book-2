import React from "react";
import PropTypes from "prop-types";

function UserDetail(props) {
  return (
    <div>
      {props.user.firstName} {props.user.lastName}
      <button onClick={props.onClick}>
        Select
      </button>
      <button onClick={props.onClick}>
        Delete
      </button>
    </div>
  );
}

UserDetail.propTypes = {
  onClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserDetail;
