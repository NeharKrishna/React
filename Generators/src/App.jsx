import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import RandomColorGenerator from './RandomColorGenerator.jsx';
import RandomQuoteGenerator from './RandomQuoteGenerator.jsx';
import FormToggle from './FormToggle.jsx';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "color",
      isDark: false,
    };
  }

  setActive = (active) => this.setState({ active });

  toggleTheme = () => this.setState(prev => ({ isDark: !prev.isDark }));

  renderContent() {
    switch (this.state.active) {
      case "color": return <RandomColorGenerator />;
      case "quote": return <RandomQuoteGenerator />;
      case "form": return <FormToggle />;
      default: return null;
    }
  }

  render() {
    const { isDark, active } = this.state;
    return (
      <div style={{
        minHeight: "100vh",
        background: isDark ? "#111" : "#fafafa",
        color: isDark ? "#fff" : "#000",
        transition: "background 0.3s, color 0.3s"
      }}>
        <Navbar
          active={active}
          setActive={this.setActive}
          isDark={isDark}
          toggleTheme={this.toggleTheme}
        />
        <div style={{ maxWidth: 600, margin: "2rem auto", borderRadius: 8, background: isDark ? "#222" : "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}
