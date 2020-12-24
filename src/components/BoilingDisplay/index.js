import React, { Component } from 'react';

class BoilingDisplay extends Component {
  render() {
    const celsius = this.props.celsius
    return celsius >= 100 ? (<p>The water would boil.</p>) : (<p>The water would not boil.</p>);
  }
}
export default BoilingDisplay;