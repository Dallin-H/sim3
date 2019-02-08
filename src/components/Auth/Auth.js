import React, { Component } from "react";
import Axios from "axios";
// import { connect } from "react-redux";
// import { updateUser } from "./../../ducks/reducer";
import "./Auth.css";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  register = () => {
    const { username, password } = this.state;
    Axios.post("/auth/register", { username, password }).then(res => {
      this.props.history.push("/dashboard");
    });
  };

  login = () => {
    const { username, password } = this.state;
    Axios.post("/auth/login", { username, password }).then(res => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="Auth">
        Auth
        <input
          value={username}
          onChange={e => this.handleChange("username", e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => this.handleChange("password", e.target.value)}
        />
        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>
      </div>
    );
  }
}

// const mapDispatchToProps = { updateUser };

export default Auth;
// connect(null, mapDispatchToProps)