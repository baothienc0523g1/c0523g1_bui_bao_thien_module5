import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return(
        <>
          <Todo/>
        </>
    )
  }
}

export default App;
