import React, { Component } from 'react'
import style from './css/Events.css'
import EventThumb from './EventThumb'
import Button from './Button'
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

class Events extends Component {
  render() {
    configureAnchors({scrollDuration: 1000})
    const eventsData = window.DATA.events
    const events = eventsData.map((d, i) => {
      const thumb = d.flag ? <EventThumb data={d} key={i} index={i} /> : ''
      return (
        thumb
      )
    })
    const viewAllButton = (<Button text="view all events" link="./events"/>)
    const header = (<h2 style={{margin: '0 0 20px 0', fontSize: '2.5em', color: 'black'}}>Chicago 1919 Events</h2>)
    const subheader = (<h4 style={{margin: '0 0 20px 0', fontSize: '1.5em', color: 'black', fontWeight: 400, fontFamily: '"Special Elite", "Georgia", serif'}}>At the heart of Chicago 1919 were 11 dynamic public programs designed to engage audiences and encourage them to examine the mechanisms through which segregation and inequality have been created, solidified, and reinforced over the past 100 years. Each program focused on a specific expression of institutionalized racism, from policing and education to housing and the media. Chicago 1919 events addressed difficult history and brought Chicagoans together in recognition and reconciliation, to imagine possible ways forward.</h4>)
    const evheader = (<h4 style={{margin: '0 0 20px 0', fontSize: '1.5em', color: 'black', fontWeight: 400, fontFamily: '"Special Elite", "Georgia", serif'}}>The Chicago 1919 events included: </h4>)
    return (
      <ScrollableAnchor id={'events'} >
      <div className={style.Events} id="upcoming-events">
        <div className={style.EventContainer}>
          {header}
          {subheader}
          {evheader}
          <div className={style.EventFlex}>
            {events}
          </div>
          {viewAllButton}
        </div>
      </div>
      </ScrollableAnchor>
    )
  }
}

export default Events
