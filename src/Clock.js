import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const date = this.state.date;
    return (
      <div className="app">
        <div className="clock">
          <p className="sub-title">{date.getFullYear()}/{date.getMonth()}/{date.getDate()}</p>
          <h1>{date.toLocaleTimeString()}</h1>
        </div>
      </div>
    )
  }
}

export default Clock;