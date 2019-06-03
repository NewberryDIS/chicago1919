import React, { Component } from 'react'
import style from './css/TweetBox.css'
import Tweet from './Tweet'
import Button from './Button'

class TweetBox extends Component {
  render() {
    const data = window.TWEETS.slice(0, 3)
    const tweets = data.map((t, i) => {
      return (
        <Tweet key={i} data={t} />
      )
    })
    return (
      <div className={style.TweetBox}>
        <h3>#chicago1919 recent tweets</h3>
          <div style={{display: 'inline-block'}}>
            {tweets}
          </div>
        <Button text="View more" link="https://twitter.com/hashtag/chicago1919?f=tweets&vertical=default&src=hash" />
      </div>
    )
  }
}

export default TweetBox
