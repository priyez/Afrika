import React, { useState, useEffect } from "react"
import {navigate} from "@reach/router"
import { removeLoader, exploreAnim } from "../animations"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, Link } from 'gatsby';

// markup

export const query = graphql`
  query {
    allPlaceJson {
      nodes {
        slug
        place
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
      }
    }
  }
`

const Explore = ({data}) => {
  const tourist = data.allPlaceJson

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
    exploreAnim();
  }, [])
 
  return (
   <div className="page" >
     <div className="loader">
   <div className="preloader">
     <div className="load"></div>
     <div className="bg"></div>
     </div>
   </div>
   <div className="explore">
   <div className="header">
    <div className="left">
    <p>Explore</p>
    </div>
    
    <div className="right">
      <div className="right-item" onClick={()=>navigate(-1)}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      </div>
      </div>
  </div>
  <div className="explore-main">
  <p>  </p>
<div className="explore-menu">
{tourist.nodes.map(tour => (
         
            <div className="container" >
            <div className="place-name">
            <div className="place-img">
            <GatsbyImage id="aImg" image={getImage(tour.thumb)} alt={tour.place} />
            </div>
            <Link id="a-link" to={`/explore/${tour.slug}`}>{tour.place}<span className="second">{tour.place}</span></Link>
            </div>
            
          </div>
          ))}



  </div>

    </div>

   </div>

			</div>


  )
}

export default Explore
