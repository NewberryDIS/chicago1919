import React, { Component } from 'react'
import style from './css/TwitterSection.css'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'

class Tweet extends Component {
  render() {
    const data = this.props.data
    const usernameStyle = {
      color: 'grey',
      fontSize: 14,
      marginBottom: 5
    }
    // const linkToTweet = 'https://twitter.com/statuses/' + data.id
    const userUrl = 'https://twitter.com/' + data.user.screen_name
    return (
      <div className={style.Tweet} >
        <img src={data.user.profile_img} />
        <div style={{display: 'inline-block', marginLeft: 5}}>
        <h4><a href={userUrl} target="_blank" className={style.truncator}>{data.user.name}</a></h4>
        <span style={usernameStyle}>@{data.user.screen_name}</span>
        </div>
        <span>{ReactHtmlParser(data.html_text)}</span>
        {/* <a href={linkToTweet} target="_blank" style={{marginTop: 10}}>Expand</a> */}
      </div>
    )
  }
}

Tweet.propTypes = {
  data: PropTypes.object
}

export default Tweet
