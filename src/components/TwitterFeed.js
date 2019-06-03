import React, { Component } from 'react'
import style from './css/TwitterFeed.css'
import Tweet from './Tweet'
import Button from './Button'

class TwitterFeed extends Component {
  render() {
    const data = window.TWEETS.slice(0,3)
    const tweets = data.map((t, i) => {
      return (
        <Tweet key={i} data={t} />
      )
    })
    return (
      <div className={style.TwitterFeed}>
        <div className={style.Container}>
        <h3>Recent Tweets</h3>
          <div style={{display: 'flex'}}>
            {tweets}
          </div>
        </div>
        <Button text="View more" link="https://twitter.com/hashtag/laudertuck?f=tweets&vertical=default&src=hash" />
      </div>
    )
  }
}

export default TwitterFeed
