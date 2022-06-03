import React, { useEffect } from "react";
import Header from "../components/header"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { homeAnim } from "../animations"


// markup
const Landing = () => {

  useEffect(() => {
    homeAnim();
   
  });

  return (
    <div className="homepage">


      {/* START SECOND ANIMATION */}
      <div className="second-anim">
        <div className="anim-three">
          <div className="bg-4" id="bgdown1"></div>
          <div className="bg-4 bgdown"></div>
          <StaticImage src="../images/National reserve/nr1.jpg" className="bg-4 bgdown1" placeholder="blurred" alt=""/>
          <StaticImage src="../images/Pyramid of Giza/pg1.jpg"  className="bg-4 bgdown" placeholder="blurred" alt=""/>
        </div>
        <div className="anim-one">
        <StaticImage src="../images/victoriafall/vf2.jpg"  className="bg-3 bg2" placeholder="blurred" alt=""/>

          <div className="text-Div-2" id="textDiv2" >
            <h4 className="text-two" id="text2" >Victorial falls
              <p>Zimbabwe</p>
            </h4>
          </div>


         
          <StaticImage src="../images/1.jpg"  className="bg-3 bg1" placeholder="blurred" alt=""/>
          <div className="text-Div-2" id="textDiv1">
            <h4 className="text-two" id="text1">Mount Kilimanjaro
              <p>Tanzania</p>
            </h4>
          </div>
        </div>

      </div>
      {/* END SECOND ANIMATION */}

      
      <div className="main-page">
        <Header />

 



        <div className="hero">
      <div className="contain">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" >
            <div className="text-Div">
  <h1>
    <span className="text-one">Explore the <label>Beauty</label> of</span>
  </h1>
  <h2 id="africa"><span>A</span>frica</h2>
</div>
              <p>
              Africa is more than just safaris. The motherland is full of rich culture, diverse heritage, unique experiences, and of course, outstanding food.
              </p>
             <Link className="btn-row" to="/explore"> <button className="explore-button"> Explore
                  
                </button>
                </Link>
            </div>
          </div>
          <div className="hero-images">
            <div  className="hero-images-inner">
              <StaticImage src="../images/2.jpg"  className="hero-image home-img" placeholder="blurred" alt=""/>
              <StaticImage src="../images/girrafe.png" className="hero-image home-img-left" placeholder="blurred" alt=""/>
        
          </div>
          </div>
        </div>
      </div>
    </div>



 
      </div>
      <div className="bottom-bg"></div>
    </div>
  )
}

export default Landing
