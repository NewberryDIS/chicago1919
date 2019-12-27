import React, { Component } from 'react'
import style from './css/Header.css'

class Header extends Component {
  render() {
    const headerData = window.DATA.header
    const title = headerData.title
    const subtitle = headerData.subtitle
    return (
      <div className={style.Header} id="header">
        <div className={style.textContainer}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <a href="#about">Explore</a>
        </div>
        <span className={style.Caption}>
          During Chicago's 1919 Race Riots, African American veterans defended their communities from attacks by whites, while the state militia eventually quelled violence. Chicago Tribune Archives/TNS.
        </span>
      </div>
    )
  }
}

export default Header
