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
    let count = 0
    const events = eventsData.map((d, i) => {
      const eventDate = new Date(d.date + ', 2019 ' + d.time.substr(0, d.time.indexOf(' ')) + ' pm')
      const currDate = new Date()
      if (eventDate > currDate && count < 3) {
        count++
        return (
            <EventThumb data={d} key={i} index={i} />
        )
      }
    })
    const viewAllButton = (<Button text="view all events" link="./events"/>)
    const header = (<h2 style={{margin: '0 0 20px 0', fontSize: '2.5em', color: 'black'}}>Upcoming Events</h2>)
    return (
      <ScrollableAnchor id={'events'} >
      <div className={style.Events} id="upcoming-events">
        <div className={style.EventContainer}>
          {header}
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
