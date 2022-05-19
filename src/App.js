import React from "react";
import Navigation from "./components/Navigation";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import PageRenderer from "./page-renderer";
function App() {
  const user = {
    firstName: "John",
    lastName: "Kester",
  };
  return (
    <Router>
      <div className="">
        <Navigation user={user} />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
