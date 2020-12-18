import React, { Component } from 'react'
import TemperatureInput from '../temperature-input/TemperatureInput'
import BoilingDisplay from '../boiling-display/BoilingDisplay'
import './Calculator.css'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '0', scale: 'c' }
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
  }
  handleTemperatureChange(value, scale) {
    this.setState({ scale, temperature: value })
  }
  transform(value, scale = 'c') {
    switch (scale) {
      case 'c':
        return (value - 32) * (5 / 9)
      case 'f':
        return value * 9 / 5 + 32
      default:
        return value
    }
  }
  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? this.transform(temperature, 'c') : temperature
    const fahrenheit = scale === 'c' ? this.transform(temperature, 'f') : temperature;
    return (
      <div className="container">
        <h2>Calculator</h2>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleTemperatureChange} />
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleTemperatureChange} />
        <BoilingDisplay celsius={celsius} />
      </div>
    )
  }
}

export default Calculator
