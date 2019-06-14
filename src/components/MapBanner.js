import React, { Component } from 'react'
import style from './css/MapBanner.css'


class MapBanner extends Component {
  render() {
    return (
      <div className={style.Container}>
        Mapping the 1919 Chicago Riot is a collaborative project from researchers at the University of Chicago to visualise the 1919 riot combining original historical sources with modern geospatial technologies.  We have compiled official reports and contemporary newspaper articles to map and detail incidents of deaths, injury, and arson that occurred during the riots, as well as geo-locating original photographs taken during that time.  <strong><a href="https:\/\/1919map.rcc.uchicago.edu\/about-this-map\/">More information</a></strong>
      </div>
    )
  }
}
export default MapBanner
