import React, { Component } from 'react'
import style from './css/Banner.css'
import logo from './assets/Chicago-1919-logo-v2.png'
import classNames from 'classnames'

class Banner extends Component {
  render() {
    const labels = window.DATA.banner.labels
    const path = window.location.pathname
    const star = (<svg width="16" height="18" version="1.1">
      <defs>
         <g id="top" transform="translate(0,-1)" fill="black">
            <polyline points="-0.258819045,0.965925826 0,0 0.258819045,0.965925826" strokeWidth="0.02" fill="red" stroke="black" transform="scale(0.70710678)" />
         </g>
         <g id="half" fill="black">
            <use xlinkHref="#top" transform="rotate(-60)" />
            <use xlinkHref="#top" transform="rotate(0)" />
            <use xlinkHref="#top" transform="rotate(60)" />
         </g>
      </defs>
      <g id="star" transform="translate(8,9) scale(8)" fill="red">
         <circle r="0.3660254" stroke="#c0c0c0" strokeWidth="0.01" fill="rgb(237,28,36)" />
         <use xlinkHref="#half"/>
         <use xlinkHref="#half" transform="scale(1,-1)"/>
      </g>
    </svg>)
    const labelHeaders = labels.map((l, i) => {
      const labelClasses = classNames({
        [style.labelContainer]: true,
        [style.activeLabel]: path === '/' + l.toLowerCase() ? true : false
      })
      return (
        // <span key={i}>&#10038; <a href="#">{l}</a></span>
        <span key={i} className={labelClasses}><span><a href={'/' + l.toLowerCase()}>{star} {l}</a></span></span>
      )
    })
    labelHeaders.unshift(<span key="logo" style={{fontSize: '1em'}}><a href="https://chicago1919.org"><img src={logo} style={{height: 50}} /></a></span>)
/*     for (let i = 1; i < 6; i = i + 2) {
      const key = 'star' + i
      const star = (<span key={key}>&#10038;</span>)
      labelHeaders.splice(i, 0, star)
    } */
    return (
      <div className={style.Banner} id="banner">
        <div className={style.Container}>
          {labelHeaders}
        </div>
      </div>
    )
  }
}

export default Banner
