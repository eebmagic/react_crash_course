import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        // console.log('Todos object created with items:')
        // console.log(this.props.items);
        // This is a for-each loop through items
        return this.props.items.map((todo) => (
            <TodoItem key={todo.id} args={todo} markComplete={this.props.markComplete}/>
        ));
    }
}

// PropTypes sets expected/required arguments to make this (Todos) object
// In this case a Todos should have a required array of items
TodoList.propTypes = {
    items: PropTypes.array.isRequired,
}

export default TodoList;