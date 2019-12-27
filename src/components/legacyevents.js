import React from 'react'
import style from './css/Events.css'
import Button from './Button'
import ScrollableAnchor from 'react-scrollable-anchor'

const Legacyevents = () => {
  const viewAllButton = (<Button text="view all events" link="./events"/>)
  const eventsimg = require('./assets/events.png')
  return (
    <ScrollableAnchor id={'events'} >
      <div className={style.Events} id="upcoming-events">
        <div className={style.EventContainer}>
          <div className={style.legacyevents}>
            <img src={eventsimg} alt=""/>
            <div>
              <p>
                At the heart of Chicago 1919 were 11 dynamic public programs designed to engage audiences and encourage them to examine the mechanisms through which segregation and inequality have been created, solidified, and reinforced over the past 100 years. Each program focused on a specific expression of institutionalized racism, from policing and education to housing and the media. Chicago 1919 events addressed difficult history and brought Chicagoans together in recognition and reconciliation, to imagine possible ways forward.
              </p>
            </div>
          </div>
        {viewAllButton}
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Legacyevents
