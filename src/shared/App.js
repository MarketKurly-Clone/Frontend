import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import ProductList from "../pages/ProductList";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={ProductList}></Route>
        </Switch>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
