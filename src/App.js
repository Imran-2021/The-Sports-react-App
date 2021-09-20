import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import LeagueDetails from "./Components/LeagueDetails";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/league/:asdf">
          <LeagueDetails/>
          </Route>
          <Route exact path="/">
          <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
