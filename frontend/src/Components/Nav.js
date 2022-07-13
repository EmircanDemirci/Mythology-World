import React, { Component } from 'react'
import "./Styles/nav.css"
export default class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <div className='text'>
          <h1>Mythology World</h1>
        </div>
        <div className='navigator'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>What is Mythology</a></li>
            <li><a href='#'>About</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
