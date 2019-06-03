import React, { Component } from 'react'
import style from './css/TwitterSection.css'
import Button from './Button'
import Tweet from './Tweet'

class TwitterSection extends Component {
  render() {
    const viewAllButton = (<Button text="view all tweets" link="https://twitter.com/hashtag/chi1919?f=tweets&vertical=default&src=hash"/>)
    const tweetsShown = 3
    const data = window.TWEETS.slice(0, tweetsShown)
    const tweets = data.map((t, i) => {
      return (
        <Tweet key={i} data={t} />
      )
    })
    return (
      <div className={style.TwitterSection}>
        <div className={style.TwitterContainer}>
          <h2 style={{margin: '0 0 20px 0', fontSize: '2.5em', color: 'black'}}>
            #chi1919 Tweets
          </h2>
          <div className={style.TwitterFlex}>
            {tweets}
          </div>
          {viewAllButton}
        </div>
      </div>
    )
  }
}

export default TwitterSection
