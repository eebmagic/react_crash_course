import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        // return (
        //     <div className="Todos">
        //     <h2>Todo Object</h2>
        //     </div>
        // );

        // console.log('Todos object created with items arg:')
        // console.log(this.props.items);
        // This is a for-each loop through items
        return this.props.items.map((todo) => (
            <TodoItem key={todo.id} args={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

// PropTypes sets expected/required arguments to make this (Todos) object
// In this case a Todos should have a required array of items
Todos.propTypes = {
    items: PropTypes.array.isRequired,
}

export default Todos;