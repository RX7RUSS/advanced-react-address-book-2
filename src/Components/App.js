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
      selectedUserList: [],
      filteredUserList: []
    };
  }

  getFilteredUserList(value) {
    const {selectedUserList} = this.state;
    const filteredList = selectedUserList.filter((user) => user.firstName.indexOf(value) > -1);
    this.setState({
      ...this.state,
      filteredUserList: filteredList
    });
  }

  handleSearchBarChange(event) {
    this.getFilteredUserList(event.target.value);
  }

  handleSelectUser(user) {
    this.setState({
      selectedUserList: [
        ...this.state.selectedUserList,
        user
      ]
    });
  }

  handleDeleteUser(selectedUser) {
    const {selectedUserList} = this.state;
    const filterSelectedUsers = selectedUserList.filter(user => user.id !== selectedUser.id);
    this.setState({
      ...this.state,
      selectedUserList: filterSelectedUsers
    });
  }

  render(props) {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>ACA Advanced Address Book</h2>
        </div>
        <h2>
          Search users
          <hr />
        </h2>
        <div>
          <SearchBar onSearchBarChange={event => this.handleSearchBarChange(event)} />
        </div>
        <h2>
          <hr />
          Available Users
          <hr />
        </h2>
        <UserList users={this.props.users}
          onUserDelete={user => this.handleDeleteUser(user)}
          onUserSelect={(user) => this.handleSelectUser(user)}
        />
        <h2>
          <hr />
          Selected Users
        </h2>
        <hr />
        {
          this.state.selectedUserList.length ? <UserList users={this.state.selectedUserList}
            onUserDelete={user => this.handleDeleteUser(user)}
            onUserSelect={(user) => this.handleSelectUser(user)}
          /> : <div />
        }
        <h2>
          <hr />
          Filtered Users
        </h2>
        <hr />
        {
          this.state.filteredUserList.length ? <UserList users={this.state.filteredUserList}
            onUserDelete={user => this.handleDeleteUser(user)}
            onUserSelect={(user) => this.handleSelectUser(user)}
          /> : <div />
        }
        </div>
    );
  }
}

App.propTypes = {
  users: PropTypes.array.isRequired
};

export default App;
