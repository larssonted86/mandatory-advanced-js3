import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import TodoContainer from './components/TodoContainer'
import './App.css';


export class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route path='/' exact >
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/todos'>
          <TodoContainer />
        </Route>
      </div>
      </Router>
      
    )
  }
}

export default App
