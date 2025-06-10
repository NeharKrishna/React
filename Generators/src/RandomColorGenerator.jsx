import React, { Component } from 'react';
import './RandomColorGenerator.css';

export default class RandomColorGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { colorState: "#ffffff" };
  }

  handleColorChange = () => {
    const chars = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      const randomChar = Math.floor(Math.random() * chars.length);
      color += chars[randomChar];
    }
    this.setState({ colorState: color });
  };

  render() {
    return (
      <div
        className="generator-section"
        style={{ backgroundColor: this.state.colorState }}
      >
        <button onClick={this.handleColorChange}>Random Color</button>
        <div className="color-generator-label">
          Current Color: <b>{this.state.colorState}</b>
        </div>
      </div>
    );
  }
}
