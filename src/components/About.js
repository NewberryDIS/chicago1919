import React, { Component } from 'react'
import style from './css/About.css'
import ReactHtmlParser from 'react-html-parser'
import Button from './Button'

class About extends Component {
  render() {
    const aboutData = window.DATA.about
    return (
      <div className={style.About} id="about">
        <div className={style.Container}>
          {ReactHtmlParser(aboutData.text)}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a5iMG90XyTw" frameBorder="0"  allowFullScreen style={{display: 'block', margin: 'auto'}}/>
          <Button text="more about this project" link="./about" />
        </div>
      </div>
    )
  }
}

export default About
