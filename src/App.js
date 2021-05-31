import React from "react";
import Header from './Header'
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TinderCards from "./TinderCards";
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          {/*Chats screen*/}
          <Route path="/chat">
            <h1>Chat with me here bebe</h1>
          </Route>
          {/*Main screen at the bottom, default since Java script runs sequentially it will stop at this page*/}
          <Route path="/">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
     


    </div>
  );
}

export default App;
