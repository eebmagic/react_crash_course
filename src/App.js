import React, { Component} from 'react';
import './App.css';
import Todos from './components/Todos';

// A class definition that extends react.Component
class App extends Component {
  // Data for App class
  // State is a js object
  state = {
    // Var with name todos that is an array of objects
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Make dinner',
        completed: true
      },
      {
        id: 3,
        title: 'Homework',
        completed: false
      }
    ]
  }

  // How the data of App is rendered and returned to the index.html
  // rendering an app involves a Todo object
  // with an items argument as the App state
  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Todos items={this.state.todos}/>
      </div>
    );
  }
}

export default App;
