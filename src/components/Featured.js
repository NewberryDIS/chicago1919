import React, { Component } from 'react'
import style from './css/Featured.css'
import Button from './Button'
import ReactHtmlParser from 'react-html-parser'

class Featured extends Component {
  render() {
    const data = window.DATA.featured
    const featuredImage = require('./assets/' + data.img)
    return (
      <div className={style.Featured} id="featured">
        <div className={style.Container}>
          <div className={style.FeaturedFlex}>
          <div className={style.LeftContainer}>
            <a className={style.FeaturedImage} href={data.link} target="_blank">
              <img src={featuredImage} style={{width: '100%'}} />
            </a>
          </div>
          <div className={style.RightContainer}>
            <h4>{data.type}</h4>
            <h3><a href={data.link}>{data.title}</a></h3>
            <span>{ReactHtmlParser(data.text)}</span>
          </div>
          </div>
          <Button text="view all resources" link="./resources" />
        </div>
      </div>
    )
  }
}

export default Featured
