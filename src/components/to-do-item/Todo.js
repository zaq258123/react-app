import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { todo, handleCheck, handleDelete } = this.props
    return (
      <li className={todo.isChecked ? 'checked' : null} onClick={() => handleCheck(todo.id)}>
        <span>{todo.title}</span>
        <button className="close-btn" onClick={(e) => handleDelete(e, todo.id)}>
          X
        </button>
      </li>
    )
  }
}

export default Todo
