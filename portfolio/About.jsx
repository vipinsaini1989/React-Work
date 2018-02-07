import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="parent-profile">
          <div className="parent-of-profile">
            <div className="image-card">
              <img src="https://raw.githubusercontent.com/vipinsaini1989/bootcamp_projects/master/portfolio/img_main.jpg" alt="Photo" className="" width="600" height="750"/>
            </div>
            <div className="about-card">
              <h1>About <i>Vipin</i></h1>
              Started career as Mechanical Engineer and now transition to Web Developer. Having knowledge of <i>Javascript</i> as language and <i>React</i> as library.
            </div>
          </div>
          <div className="about__table"></div>
        </div>
        <div>
          <h2 className="skill-head">Competency</h2>
          <div className="skill-div">
            <div className="tile-div">HTML</div>
            <div className="tile-div">CSS</div>
            <div className="tile-div">Javascript</div>
            <div className="tile-div">React JS</div>
            <div className="tile-div">Firebase</div>
          </div>
        </div>
      </div>
    )
  }
}
