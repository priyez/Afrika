import React, { useState, useEffect } from "react"
import { removeLoader } from "../../animations"
import gsap from 'gsap';
import {navigate} from "@reach/router"
import { detailAnim } from "../../animations"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { TweenMax } from "gsap/gsap-core";
import { Helmet } from "react-helmet"

// markup

export const query = graphql`
  query($slug: String) {
    placeJson(slug: { eq: $slug }) {
      desc
      landmark
      country
      thumb {
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            jpgOptions: {}
            quality: 90
            tracedSVGOptions: {}
            placeholder: BLURRED
          )
        }
      }
      info
      slug
      place
    }
  }
`

const DetailsPage = ({data}) => {
  const tourist = data.placeJson
  const [loading, setLoading] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const count = setInterval(() => {
      setLoading(loading => {
        if (loading < 10) {
          setLoading(loading + 1)
        } else {
          clearInterval(count)
          setLoading(10)
          removeLoader(setComplete)
        }
      })
    }, 30)
  }, [])


  useEffect(() => {
  detailAnim();
}, )

 useEffect(()=>{
  TweenMax.set ("#circle1", {strokeDasharray:2500});
  TweenMax.from("#circle1", 0.25, {strokeDasharray:0})
  TweenMax.to("#circle1", 5, {strokeDasharray:2500})
 })



  return (
   <div className="page" style={{height:'auto'}} >
      <Helmet>
          <meta charSet="utf-8"/>
        <title>Afrika - {tourist.place}</title>
      </Helmet>
     <div className="loader">
   <div className="preloader">
     <div className="load"></div>
     <div className="bg"></div>
     </div>
   </div>
  <div className="details">
  <div className="header">
    <div className="left"></div>
    <div className="right-d"  onClick={()=>navigate(-1)}>
     <h2>Back</h2>
    </div>
    
  </div>
  <div className="details-main">
    <div style={{display:'flex'}}>
    <div className="details-image">
      <GatsbyImage imgClassName="img" image={getImage(tourist.thumb)} alt={tourist.place} />
      </div>
      <div className="place-title">
      <h4>{tourist.place}</h4>
      <p></p>
      </div>
      </div>
      <div>
        <div>
        <svg id="circle-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
     <circle id="circle1" cx="350" cy="350" r="340" stroke="#196EFB" stroke-width="2" fill-opacity="0" />
</svg>
        <svg id="circle-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
     <circle id="circle2" cx="280" cy="280" r="270" stroke="#196EFB" stroke-width="2" fill-opacity="0" />
</svg>
        </div>
     
</div>
      <div className="place-text">
        <h4>
          <p>{tourist.landmark}</p>
          <div>{tourist.country} <label id="draw"></label></div>
        </h4>
        <h5  id="desc">
          <span>Did you Know ?</span>{tourist.desc}
        </h5>
      </div>
      {/* // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.36 30" style="width: 35px;"><defs><style>.cls-1{fill:#d7d7d7;fill-rule:evenodd;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path id="Replay-1" class="cls-1" d="M9.52,19.12V14.39c0-.73-.47-.93-1-.45L.43,21a1.09,1.09,0,0,0-.43.87,1.1,1.1,0,0,0,.43.87l8.06,7c.57.48,1,.28,1-.45V24.56h1.36a11.66,11.66,0,0,0,10.75-9,7.65,7.65,0,0,0,.17-1c0-.37-.13-.45-.39-.19a1,1,0,0,0-.14.13,15.59,15.59,0,0,1-10.39,4.63H9.52"></path><path id="Replay-1-2" data-name="Replay-1" class="cls-1" d="M24.84,10.88v4.73c0,.73.46.93,1,.45l8.06-7a1.09,1.09,0,0,0,.43-.87,1.1,1.1,0,0,0-.43-.87l-8.06-7c-.57-.48-1-.28-1,.45V5.44H23.47a11.66,11.66,0,0,0-10.74,9,7.65,7.65,0,0,0-.17,1c0,.37.13.45.39.19a1,1,0,0,0,.14-.13,15.55,15.55,0,0,1,10.39-4.63h1.36"></path></g></g></svg> */}
     <div className="text-grid">
    <p>{tourist.info}</p>
     </div>
  </div>
  </div>

   </div>



  )
};

export default DetailsPage
