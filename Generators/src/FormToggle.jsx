import React, { Component } from 'react';
import './FormToggle.css'; // Import your CSS file

export default class FormToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: true };
  }

  toggleForm = () => {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }));
  };

  render() {
    return (
      <div className="form-container">
        <h2>{this.state.isLogin ? 'Login' : 'Sign Up'}</h2>
        {this.state.isLogin ? (
          <div>
            <input type="text" placeholder="Username" className="input" /><br />
            <input type="password" placeholder="Password" className="input" /><br />
            <button className="button">Login</button>
          </div>
        ) : (
          <div>
            <input type="text" placeholder="Username" className="input" /><br />
            <input type="email" placeholder="Email" className="input" /><br />
            <input type="password" placeholder="Password" className="input" /><br />
            <button className="button">Sign Up</button>
          </div>
        )}
        <button onClick={this.toggleForm} className="toggle-button">
          {this.state.isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
        </button>
      </div>
    );
  }
}
