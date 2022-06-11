import React, { useState, useEffect } from "react"
import { removeLoader } from "../animations"
import Landing from './landing'
import '../styles/app.scss'



// markup
const IndexPage = () => {
  const [loading, setLoading] = useState(0)
  const [complete, setComplete] = useState(false)

  useEffect(() => {
    const count = setInterval(() => {
      setLoading(loading => {
        if (loading < 100) {
          setLoading(loading + 1)
        } else {
          clearInterval(count)
          setLoading(100)
          removeLoader(setComplete)
        }
      })
    }, 30)
  }, [])
  return (
    <div className="main">
      <div className="loader">
      <div className="preloader">
        <div className="load"></div>
        <div className="loader-text">africa is the 2nd Largest continent in the worls & globe</div>
        <div className="loader-bottom" >
        <div className="progress-bar" style={{ width: `${loading}%` }}></div>
        <div className="counter">{loading}%</div>
        </div>
        <div className="bg"></div>
        </div>
      </div>
      {complete && <Landing />}
    </div>
  )
}

export default IndexPage
