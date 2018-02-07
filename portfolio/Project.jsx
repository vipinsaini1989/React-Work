import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div>
        <div className="project">
            <div className="project-flex-container">
                <div className="project-flex-item">
                  <a>
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_1.png?raw=true" alt="project" width="100%" height="100%"/>
                  </a>
                  <div className="project-text">
                    <h3>Jaaga-Community</h3>
                    <p>A react based app which sort the people based on their profile, skill and venture, they have. The project is integrated with slack login and also we can even search the person based on these three categories.</p>  
                  </div>
                </div>

                <div className="project-flex-item">
                  <a>
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_2.png?raw=true" alt="project" width="100%" height="100%" />
                  </a>
                  <div className="project-text">
                    <h3>CyberScouts</h3>
                    <p>one of the initiative by Jaaga to provide digital education to the school children, making them no longer alien to the new technology. This is a static web page build in react.</p>
                  </div>
                </div>

                <div className="project-flex-item">
                  <a href="" target="_blank">
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_3.png?raw=true" alt="project" width="100%" height="100%" />
                  </a>
                  <div className="project-text">
                    <h3>Keycode.info(Clone)</h3>
                    <p>Clone of alread build website (keycode.info) but here it is build in react providing the UNICODE number of the key pressed.</p>
                  </div>
                </div>

                <div className="project-flex-item">
                  <a href="" target="_blank" >
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_4.png?raw=true" alt="project" width="100%" height="100%" />
                  </a>
                  <div className="project-text">
                    <h3>Pomodoro clock</h3>
                    <p>Pure javascript based app, which provide the working interval upto 30 minutes and rest time upto 10 minutes. Once the cycle is over it again starts.</p>
                  </div>
                </div>

                <div className="project-flex-item">
                  <a href="https://github.com/vipinsaini1989/Wikipedia-search" target="_blank" >
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_5.png?raw=true" alt="project" width="100%" height="100%;" />
                  </a>
                  <div className="project-text">
                    <h3>Wikipedia Search</h3>
                    <p>API based project, in which typed text is searched and shows the top 10 result. This is also javascript based project.</p>
                  </div>
                </div>

                <div className="project-flex-item">
                  <a href="" target="_blank" >
                    <img src="https://github.com/vipinsaini1989/bootcamp_projects/blob/master/ProfilePhoto/screen_6.png?raw=true" alt="project" width="100%" height="100%" />
                  </a>
                  <div className="project-text">
                    <h3>Tribute page</h3>
                    <p>This page is pure HTML, without applying style. All the design are provided by the various tag provided by the HTML tags.</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
