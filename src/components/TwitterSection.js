import React, { Component} from 'react'
import style from './css/TwitterSection.css'
// import Button from './Button'
// import Twittercontainer from './twittercontainer'

class TwitterSection extends Component {
  componentDidMount() {
    window.twttr.widgets.load()
  }
  render() {
    return (
      <div className={style.TwitterSection}>
        <div className={style.TwitterContainer}>
          <h2 style={{textAlign: 'center', fontSize: '1.5em', color: 'black', margin: '0 auto 0 auto'}}>
            <a href="https://twitter.com/hashtag/Chi1919?src=hash" rel="noopener noreferrer" target="_blank">

            #chi1919 Tweets
          </a>
          </h2>
          <div className={style.TwitterFlex}>
              <blockquote className="twitter-tweet"  ><p>Thank you to everyone who joined us + <a href="https://twitter.com/blackstonebikes?ref_src=twsrc%5Etfw">@blackstonebikes</a> today for a ride to the key sites of violence/resistance/significance associated w/ the 1919 Chicago race riots: 31 St. Beach, Ida B. Wells house, Union Stockyards, the Forum in Bronzeville, &amp; more. <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a> <a href="https://twitter.com/NEH_PubPrograms?ref_src=twsrc%5Etfw">@NEH_PubPrograms</a> <a href="https://t.co/qUhTLco1C2">pic.twitter.com/qUhTLco1C2</a></p>&mdash; Newberry Library (@NewberryLibrary) <a href="https://twitter.com/NewberryLibrary/status/1145088531506839553?ref_src=twsrc%5Etfw">June 29, 2019</a></blockquote>
              <blockquote className="twitter-tweet"  ><p>“History will repeat itself if you don’t teach it.” <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a> <a href="https://t.co/sde4pWcQxv">https://t.co/sde4pWcQxv</a></p>&mdash; Chicago Reader (@Chicago_Reader) <a href="https://twitter.com/Chicago_Reader/status/1175454756661280768?ref_src=twsrc%5Etfw">September 21, 2019</a></blockquote>
              <blockquote className="twitter-tweet"  ><p>&quot;The lifeguard had gotten the boy’s body, and naturally all the people were here on this island. Then they...demanded that they arrest the man. And this is when the fight started.&quot; <a href="https://twitter.com/robertloerzel?ref_src=twsrc%5Etfw">@robertloerzel</a> &#39;s piece in <a href="https://twitter.com/ChicagoMag?ref_src=twsrc%5Etfw">@ChicagoMag</a> gives 1st-hand stories of <a href="https://twitter.com/hashtag/Chi1919?src=hash&amp;ref_src=twsrc%5Etfw">#Chi1919</a>. <a href="https://t.co/f9WYMHFAPh">https://t.co/f9WYMHFAPh</a></p>&mdash; Newberry Library (@NewberryLibrary) <a href="https://twitter.com/NewberryLibrary/status/1162088069245394945?ref_src=twsrc%5Etfw">August 15, 2019</a></blockquote>
          </div>
        </div>
      </div>
    )
  }
}

export default TwitterSection
