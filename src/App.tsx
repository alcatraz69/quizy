import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar'
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Switch, Route } from "react-router-dom";
import { Quiz } from "./components/Quiz/Quiz";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route component={Dashboard} path="/dashboard" ></Route>
        <Route path="/quiz/:quizId" component={Quiz}></Route>
        <Route path="/" component={Dashboard}></Route>
        {/* <Route path='/quiz/:quizId/scoreboard' element={<Scoreboard />}></Route> */}
      </Switch>
    </div>
  );
}
