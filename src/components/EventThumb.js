import React, { Component } from 'react'
import style from './css/Events.css'
import PropTypes from 'prop-types'

class EventThumb extends Component {
  render() {
    const data = this.props.data
    const bgImg = '/static/media/' + data.link + '.jpg'
    const index = this.props.index
    const id = 'events_' + index
    return (
      <div style={{backgroundImage: 'url(' + bgImg + ')', backgroundPosition: data.img[0], backgroundSize: data.img[1], margin: index === 1 ? '0 30px' : 'unset'}} className={style.EventThumb} id={id}>
        <a href={data.link}>
          <div className={style.TextContainer}>
            <h3>{data.title}</h3>
            <h4>{data.subtitle}</h4>
            <h4 style={{fontSize: '2em'}}>{data.date}</h4>
          </div>
        </a>
        <span style={{marginTop: 5, fontSize: '1.2em', fontWeight: 'bold'}}>{data.location}</span>
      </div>
    )
  }
}

EventThumb.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number
}

export default EventThumb
