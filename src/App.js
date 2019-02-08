import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from './ducks/store';
import routes from "./routes";
import Nav from "./components/Nav/Nav";

import "./App.css";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            {routes}
            <Nav />
          </div>
        </Router>
    );
  }
}

export default App;
