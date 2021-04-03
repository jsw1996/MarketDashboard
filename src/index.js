import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LineChart from './modules/Chart/LineChart';
import Navbar from './modules/Navbar/Navbar';
import Market from './modules/Market/Market'
import {
  withRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Navbar />

      <Switch>

        <Route exact path="/" exact component={withRouter(App)} />
        <Route path="/market" component={withRouter(Market)} /></Switch>
    </Router>

  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
