import React, { Component } from 'react'
import style from './css/Footer.css'
import TwitterSection from './TwitterSection'
// import TweetBox from './TweetBox'

class Footer extends Component {
  render() {
    const nehlogo = require('./assets/logos/NEH_h-logo_03_black.jpg')
    const nllogo = require('./assets/logos/Newberry_horiz_black.png')
    const allstate = require('./assets/logos/all_cogh_grad_hor_rgb_pos.jpg')
    const attribution = require('./assets/attribution_icon_black_x2.png')
    const cc = require('./assets/cc_icon_black_x2.png')
    const partners = window.DATA.partners
    let logo
/*     const logos = partners.map((p, i) => {
      logo = 'logo' in p ? (<img src={require('./assets/logos/' + p.logo)} style={{maxWidth: 250}} />) : (<span>{p.name}</span>)
      return <li key={i}><a href={p.link} target="_blank">{logo}</a></li>
    }) */

    const logos1 = partners.slice(0, 4).map((p, i) => {
      logo = 'logo' in p ? (<img src={require('./assets/logos/' + p.logo)} title={p.name} />) : (<span>{p.name}</span>)
      return <li key={i}><a href={p.link} target="_blank">{logo}</a></li>
    })
    const logos2 = partners.slice(4, 9).map((p, i) => {
      logo = 'logo' in p ? (<img src={require('./assets/logos/' + p.logo)} title={p.name} />) : (<span>{p.name}</span>)
      return <li key={i}><a href={p.link} target="_blank">{logo}</a></li>
    })
    const logos3 = partners.slice(9, 14).map((p, i) => {
      logo = 'logo' in p ? (<img src={require('./assets/logos/' + p.logo)} title={p.name} />) : (<span>{p.name}</span>)
      return <li key={i}><a href={p.link} target="_blank">{logo}</a></li>
    })
    return (
      <div className={style.Footer}>
        <TwitterSection />
        <div className={style.Container}>
          <div className={style.Top}>
            <a href="https://www.neh.gov/" target="_blank">
              <img src={nehlogo} style={{maxHeight: 200, maxWidth: '100%'}}/>
            </a>
          </div>
          <div style={{textAlign: 'center', maxWidth: '60%', margin: 'auto'}}>
            <span>
            Chicago 1919: Confronting the Race Riots has been made possible in part by a major grant from the National Endowment for the Humanities: Exploring the human endeavor.
            </span>
            <br />
            <br />
            <span>
              Any views, findings, conclusions, or recommendations expressed in these programs do not necessarily represent those of the National Endowment for the Humanities.
            </span>
          </div>
          <div className={style.Bottom}>
            <a href="https://www.newberry.org" target="_blank">
              <img src={nllogo} style={{maxHeight: 200, maxWidth: 350}}/>
            </a>
          </div>
          <div className={style.Bottom}>
            <span style={{display: 'block', fontWeight: 'bold'}}>Youth Engagement Sponsor:</span>
            <a href="https://ourstory.allstate.com/withinsociety/engagingyouth/" target="_blank">
              <img src={allstate} style={{maxHeight: 200, maxWidth: 350}}/>
            </a>
          </div>
          <div className={style.Bottom}>
            <h3>Edith Rasmussen Ahern and Patrick Ahern</h3>
          </div>
        </div>
        <div className={style.SecondContainer}>
          <hr />
          <span>
            Chicago 1919 is being coordinated by the Newberry Library in partnership with:
          </span>
          <ul>
            {logos1}
          </ul>
          <ul>
            {logos2}
          </ul>
          <ul>
            {logos3}
          </ul>
          <span>Questions? Comments? Interested in volunteering? <a href="mailto:publicprograms@newberry.org" target="_blank">Contact us</a></span>
          <hr />
          <span style={{display: 'block'}}>Except where otherwise noted, content on this site is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International license.</a></span>
          <a href="https://creativecommons.org/licenses/by/4.0/">
          <img src={attribution} style={{maxWidth: 50, margin: 10}}/>
          <img src={cc} style={{maxWidth: 50, margin: 10}}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
