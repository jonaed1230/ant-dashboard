import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import LoginPage from './components/LoginPage';
function App() {
  return (
    <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/transactions" component={Transactions} />
      </Router>
  );
}

export default App;
