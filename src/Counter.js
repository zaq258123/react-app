import React from 'react';
import './Counter.css'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.handleAdd = this.handleAdd.bind(this);
    // this.handleMinus = this.handleMinus.bind(this);
  }
  handleAdd() {
    // this.setState({ count: this.state.count + 1 });
    this.setState(state => ({ count: state.count + 1 }));
  }
  handleMinus() {
    // this.setState({ count: this.state.count - 1 });
    this.setState(state => ({ count: state.count - 1 }));
  }
  handleReset() {
    this.setState(state => ({ count: 0 }));
  }
  render() {
    return (
      <div className="app">
        <div className="counter">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>
          <div>
            <button className="btn" onClick={() => this.handleAdd()}>+</button>
            <button className="btn" onClick={() => this.handleMinus()}>-</button>
            <button className="btn" onClick={() => this.handleReset()}>Reset</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;