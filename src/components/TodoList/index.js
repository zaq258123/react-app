import { Component } from 'react'
import './style.css'
import Item from '../Todo'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { inputText: '', todoArr: [] }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleChange(event) {
    this.setState({ inputText: event.target.value })
    event.preventDefault()
  }
  handleSubmit(event) {
    if ((event.key === 'Enter' || event.key === undefined) && this.state.inputText) {
      this.setState((state) => {
        const date = new Date()
        const { todoArr, inputText } = this.state
        return {
          inputText: '',
          todoArr: [
            ...todoArr,
            {
              title: inputText,
              date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
              isChecked: false,
            },
          ],
        }
      })
    }
  }
  handleCheck(index) {
    this.setState((state) => ({
      todoArr: state.todoArr.map((todo, i) => {
        if (i === index) {
          const copy = { ...todo }
          copy.isChecked = !todo.isChecked
          return copy
        } else {
          return todo
        }
      }),
    }))
  }
  handleDelete(event, index) {
    this.setState((state) => ({
      todoArr: state.todoArr.filter((todo, i) => i !== index),
    }))
    event.stopPropagation()
  }
  render() {
    const { todoArr, inputText } = this.state
    return (
      <div className="layout">
        <header>
          <h2>To Do List</h2>
          <div className="list-input-wrapper">
            <input
              type="text"
              placeholder="Title..."
              value={inputText}
              onChange={this.handleChange}
              onKeyPress={this.handleSubmit}
            />
            <button onClick={this.handleSubmit}>Add</button>
          </div>
        </header>
        <div className="content">
          <ul style={{ margin: '10px 0' }}>
            {(todoArr || []).map((item, index) => (
              <Item
                todo={{ ...todoArr[index], id: index }}
                key={index}
                handleCheck={this.handleCheck}
                handleDelete={this.handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
