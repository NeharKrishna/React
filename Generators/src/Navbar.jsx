import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    const { active, setActive, isDark, toggleTheme } = this.props;
    return (
      <nav style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: isDark ? "#222" : "#eee",
        color: isDark ? "#fff" : "#000"
      }}>
        <button onClick={() => setActive("color")} style={{ fontWeight: active === "color" ? "bold" : "normal" }}>Random Color</button>
        <button onClick={() => setActive("quote")} style={{ fontWeight: active === "quote" ? "bold" : "normal" }}>Random Quote</button>
        <button onClick={() => setActive("form")} style={{ fontWeight: active === "form" ? "bold" : "normal" }}>SignUp/Login</button>
        <button onClick={toggleTheme}>{isDark ? "Light Theme" : "Dark Theme"}</button>
      </nav>
    );
  }
}
