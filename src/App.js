import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="NewsHunt" />

        <News  title="General" pageSize={3} country="in" category="general" />

        <News title="Technology" pageSize={3} country="in" category="technology" />

        <News title="Science" pageSize={3} country="in" category="science" />

        <News title="Health" pageSize={3} country="in" category="health" />

        <News title="Business" pageSize={3} country="in" category="business" />
        <News title="Sports" pageSize={3} country="in" category="sports" />

        <News title="Technology" pageSize={3} country="in" category="technology" />
      </div>
    );
  }
}
