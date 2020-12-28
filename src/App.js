import React, { Component} from 'react';
import './App.css';
import TodoList from './components/TodoList';

// A class definition that extends react.Component
class App extends Component {
  // Data for App class
  // State is a js object
  state = {
    // Var with name values that is an array of objects
    values: [
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

  markComplete = (id) => {
    console.log('Hello from App.js')
    console.log(id)

    // flip value at id
    this.setState({ values: this.state.values.map(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
      return item;
    }) });
  }

  // How the data of App is rendered and returned to the index.html
  // rendering an app involves a Todo object
  // with an items argument as the App state
  render() {
    console.log(this.state.values)
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <TodoList items={this.state.values} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
