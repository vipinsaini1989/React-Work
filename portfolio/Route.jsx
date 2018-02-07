import React, { Component } from 'react'
import Header from "./Header";
import Footer from './Footer';
import './Style.css';
import ImgSlide from './ImgSlide';
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { BrowserRouter, Route} from "react-router-dom";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={ImgSlide} />        
        <Route exact path="/" component={About} />
        <Route path="/home" component={ImgSlide} />
        <Route path="/home" component={About} />
        <Route path="/projects" component={Project} />
        <Route path="/contacts" component={Contact} />
        <Route path="/" component={Footer} />
      </div>
      </BrowserRouter>
    )
  }
}
