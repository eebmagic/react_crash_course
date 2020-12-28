import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    // Return conditional styling for if completed
    getStyle = () => {
        return  {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // ternary operator for strike-through
            textDecoration: this.props.args.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p> {this.props.args.id} - {this.props.args.title} </p>
                <br />
            </div>
        )
    }
}

// required args for TodoItem are the object
// (which should have id, title, & completed)
TodoItem.propTypes = {
    args: PropTypes.object.isRequired
}

export default TodoItem;