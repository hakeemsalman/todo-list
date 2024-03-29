import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class TodoItem extends Component {

  getStyle = () =>{

    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration : this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}  name="name" id="" />{' '}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>Delete</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '5px',
  cursor: 'pointer',
  float: 'right'
}

