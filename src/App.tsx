import React from 'react';
import {Navbar} from './components/Navbar/Navbar'
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import { Quiz } from "./components/Quiz/Quiz";
import {Scoreboard} from './components/Scoreboard/Scoreboard'

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} ></Route>
        <Route exact  path="/quiz/:quizId" component={Quiz}></Route>
        <Route  exact  path='/quiz/:quizId/Scoreboard' component={Scoreboard}></Route>
        <Route exact path="/" component={Dashboard}></Route>
      </Switch>
    </div>
  );
}
