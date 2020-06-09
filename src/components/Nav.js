import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
      <>
      <div className="navBar">
        <span >Home</span> | SEARCH TV SHOW    
      </div>

      <div className="logo-container">

        <div className="container">
          <div className="item item1"></div>
          <div className="item item2 font-size">TV</div>
          <div className="item item3"></div>
          <div className="item item4">
            <span className="dot1"></span>
          </div>
          <div className="item item5 font-size">SH</div>
          <div className="item item6"></div>
          <div className="item item7"></div>   
          <div className="item item8 font-size3">OW</div>
          <div className="item item9"></div> 
        </div>

      </div>
      </>
    )
  }
}

{/* <svg width="100" height="100">
   <circle cx="5" cy="5" r="4" stroke="green" stroke-width="4" fill="yellow" />
   Sorry, your browser does not support inline SVG.
</svg>  */}