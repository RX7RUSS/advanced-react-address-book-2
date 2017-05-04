import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedUserList: []
    };
  }

  getFilteredUserList() {

  }

  handleSearchBarChange() {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <br />
        <div>
          <SearchBar />
        </div>
        <h2>
          <hr />
          Available users
          <hr />
        </h2>
        <UserList users={this.props.users} onUserSelect={(selectedUser) => {
          // console.log("User selected in app", selectedUser);
          this.setState({
            selectedUserList: [
              ...this.state.selectedUserList,
              selectedUser
            ]
          });
        }} />

        <h2>
          <hr />
          Selected users
          </h2>
        <hr />
        <UserList users={this.state.selectedUserList} onUserSelect={() => {}} />
      </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
