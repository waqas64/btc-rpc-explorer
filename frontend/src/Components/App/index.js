import React, { Component } from "react";
import { Provider } from "mobx-react";
import { Router, Switch, Route } from "react-router-dom";

import history from "../../history";

import "./App.css";

import store from "../../store";
import Navbar from "../Navbar";
import Blocks from "../Blocks";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Provider store={store}>
          <div>
            <Navbar />
            <Switch>
              <Route path="/blocks" component={Blocks} />
              {/* <Route path="/suppliers" component={Suppliers} />
            <Route exact path="/controls/:supplier" component={ControlCategories} />
            <Route path="/controls/:supplier/:category" component={Controls} /> */}
              {/* <Redirect to="/home" /> */}
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
