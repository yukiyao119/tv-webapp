import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <hr className="contact__line"></hr>
        <div className="contact__title">Contact us</div>
        <div className="contact__container">
          <div>
            <div className="contact__first"><span className="alert">Address</span> | Mailing</div>
            <div>Primary Address Line</div>
            <div>Secondary Address Line</div>
            <div>12345 Postal Code</div>
          </div>
          <div className="contact__first">
            <div className="item-title"><span className="alert">Phone</span> | Ring! Ring!</div>
              <div>Headline</div>
              <div>+1 123 456 789</div>
          </div>
          <div className="contact__first">
            <div className="item-title"><span className="alert">E-Mail</span> | Swoosh!</div>
            <div>email@email.com</div>
          </div>
        </div>
      </div>
    )
  }
}
