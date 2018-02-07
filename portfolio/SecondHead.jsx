import React, { Component } from 'react'
import "./Style2.css";

export default class SecondHead extends Component {
    constructor(){
        super();
        this.state = {
            toggleBtn: false
        }
    }
    openMenu = ()=>{
        document.getElementById("menu").style.display = "block";
        document.querySelector(".Xbtn").style.display = "block";
        document.querySelector(".burger").style.display = "none";        
        this.setState({
            toggleBtn: true
        })
    }
    closeMenu = ()=>{
        document.getElementById("menu").style.display = "none"; 
        document.querySelector(".Xbtn").style.display = "none";
        document.querySelector(".burger").style.display = "block";
        this.setState({
            toggleBtn: false
        })       
    }
  render() {
    return (
      <div>
        <div className="responsive-bar">
            <h3 className="brand"><a href="#">VIPIN's <i>Portfolio</i></a> </h3>
            <h2 className="burger" onClick={this.openMenu}><a href="#">&#9776;</a></h2>
            <h2 className="Xbtn" onClick={this.closeMenu}><a href="#">X</a></h2>
            <div Style="clear:left"></div>            
        </div>
        <nav id="menu">
            <h1 className="brand"><a href="#">VIPIN's <span><i> Portfolio</i></span></a></h1>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <div Style="clear:both"></div>
        </nav>
      </div>
    )
  }
}
