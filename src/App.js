import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
// import Brand from "./pages/Brand";

class App extends Component {
  state = {
    date: new Date()
  };

  // render() {
  //   return <div className="App">
  //     <div>The Date is <b>{this.state.date.toLocaleDateString()}</b> and the time is <b>{this.state.date.toTimeString()}</b></div>
  //     <Brand />
  //   </div>;
  // }

  render() {
    return <Home />
  }
}

export default App;
