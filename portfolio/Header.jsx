import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'


export default class Header extends Component {
  render() {
    return (
      <div>
        <nav>
            <div className="logo">
                <Link to="/"><b>Vipin's</b><span> Portfolio</span></Link>
            </div>
            <div className="nav">
                <label for="toggle"className="hamburger">&#9776;</label>
                <input type="checkbox" id="toggle"/>
                <div className="menu">
                    <NavLink to="/home">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
              <a target="_blank" href="https://docs.google.com/document/d/e/2PACX-1vTQ9vexN5RZHyUrOOedZVK95VcvavG-WqblJlUCOfzYtegxsLxFqq-zw7OUkn9enHj6f9exDgbWPLZ6/pub">Resume</a>
                    <NavLink to="/contacts">Contact</NavLink>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}
