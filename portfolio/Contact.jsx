import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <div className="contact-div">
            <div className="icon-div">
                <div className="quote-text">
                    <h1><i class="fa fa-quote-left"></i>
                    &nbsp;
                    Believe you can and you're halfway there.</h1>
                    <p><i>Theodore Roosevelt</i></p>
                </div>
            </div>
            <div className="icon-div">
                <div className="icon-list">
                    <a href="www.linkedin.com/in/vipin-saini-76a76765" target="_blank">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://angel.co/vipin-saini" target="_blank">
                        <i class="fa fa-angellist" aria-hidden="true"></i>
                    </a>
                    <a href="https://github.com/vipinsaini1989" target="_blank">
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
