import React, { Component } from 'react'
import './style.css'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}
class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.props.onTemperatureChange(e.target.value, this.props.scale)
  }
  render() {
    const scale = this.props.scale
    const temperature = this.props.temperature
    return (
      <fieldset>
        <p>Scale: {scaleNames[scale]}</p>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput
