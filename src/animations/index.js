import gsap from "gsap"

export const removeLoader = setComplete => {
  const tl = gsap.timeline({
    onComplete: () => {
      setComplete(true)
    },
  })

  tl.to(".loader-text", {
    duration: 0.3,
    opacity: 0,
    display: "none",
  })
  
  .to(
    ".load",
    {
      duration: 0.1,
      width: "100%",
      ease: "Expo.easeInOut",
    },
    "+=.8"
  )
    .to(".counter", {
      duration: 0.3,
      opacity: 0,
      display: "none",
    })
   
    .to(
      ".load",
      {
        duration: 0.3,
        height: "100%",
        ease: "Expo.easeInOut",
      },
      "+=.5"
    )
    .to("body", {
      duration: 0.1,
      background: "#000",
    })
    .to(
      ".bg",
      {
        duration: 0.6,
        width: "100%",
        ease: "Expo.easeInOut",
      },
      "-=.1"
    )
    .to(".preloader", {
      duration: 0.5,
      opacity: 0,
      display: "none",
    })
    .to(".loader", {
      duration: 0.1,
      opacity: 0,
      display: "none",
    })
   
}


export const homeAnim =()=>{
  let tl = gsap.timeline();
   //  first animation start
   const conditional=(mediaQuery)=>{
    if(mediaQuery.matches){

       
           tl.to(
             ".bg1",
           {
             delay:0.3,
             duration: 1,
             width: "50%",
            height:"0.6%",
             ease: "Expo.easeInOut",
           },
           "-=.1"
          )
       tl.to(
         ".bg1",
         {
           delay:0.5,
           duration: 1,
           height: "55%",
           ease: "Expo.easeInOut",
         },
         "-=.1"
        )
        tl.to(
         "#textDiv1",
         {
           duration:0.7,
           opacity:1,
           strokeOpacity: 1,
           ease: "Expo.easeInOut",
         },
         "-=.1"
        )
        tl.from(
         "#text1",
         {
           delay:0.4,
           duration:1.5,
           stagger:0.2,
           opacity: 1,
           y:0.6,
           ease: "Expo.easeInOut",
         },
        ) 
         tl.to(
         "#textDiv1",
         {
           duration:0.7,
           opacity:0,
           strokeOpacity: 1,
           ease: "Expo.easeInOut",
         },
         "-=.1"
        )
    tl.to(
      ".bg1",
      {
        delay:0.5,
        duration: 1,
        height: "0.6",
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".bg1",
    {
      delay:0.4,
      duration: 1,
      width: "50%",
     height:"0.4%",
      ease: "Expo.easeInOut",
    },
    "-=.1"
   )



   tl.to(
    ".bg2",
  {
    duration: 1,
    width: "50%",
   height:"0.6%",
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
tl.to(
".bg2",
{
  delay:0.3,
  duration: 1,
  height: "55%",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
"#textDiv2",
{
  duration:0.7,
  opacity:1,
  strokeOpacity: 1,
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.from(
"#text2",
{
  delay:0.4,
  duration:1,
  stagger:0.2,
  opacity: 1,
  y:2,
  ease: "Expo.easeInOut",
},
) 

tl.to(
  "#textDiv2",
  {
    duration:0.7,
    opacity:0,
    strokeOpacity: 1,
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
 tl.to(
  ".bg1",
{
  duration: 1,
  width: "0",
  height:"0",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
 duration: 1,
 height: "0.6",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
duration: 1,
width: "0%",
height:"0",
ease: "Expo.easeInOut",
},
"-=.1"
)


// Image Animation Down
tl.to(
  ".bgdown",
 {
  duration: 1,
  width: "50%",
 height:"0.6%",
  ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
 ".bgdown",
 {

 duration: 1,
 height: "55%",
 ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
  ".bgdown",
  {
   delay:0.5,
   duration: 1,
   height: "0.6",
   ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
  ".bgdown",
  {
  duration: 1,
  width: "50%",
  height:"0.2%",
  ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
    ".bgdown1",
   {
    duration: 1,
    width: "50%",
   height:"0.6%",
    ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
   ".bgdown1",
   {
   duration: 0.6,
   height: "55%",
   ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
    ".bgdown",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
    )
   tl.to(
    ".bgdown1",
    {
     delay:0.5,
     duration: 0.6,
     height: "0.6",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".bgdown1",
    {
      duration: 0.6,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".main-page",
    {

     duration: 1,
     width: "100%",
     height:"0.6%",
     background:" rgb(255, 225, 191)",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".main-page", {
    duration: 1,
    height:"100vh",
    background:"#000",
    zIndex:10,
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    "#logo",
    {
      duration: 1,
    opacity: 1,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".text-one",
    {
      delay:0.2,
      duration: 1,
    opacity: 1,
    y:-430,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".text-one label",
    {
      delay:0.3,
      duration: 0.5,
    opacity: 1,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    "#africa",
    {
      duration: 1,
    opacity: 1,
    y:10,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".btn-row",
      {
        duration: 0.5,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
   tl.to(
  ".hero-content-inner p",
    {
      delay:0.1,
      duration: 0.6,
    opacity: 1,
    y:24,
    ease: "Expo.easeInOut",
    },
   )
  tl.to(
    ".home-img",
    {
      delay:0.1,
      duration: 1,
    width: "0%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )
   tl.to(
    ".home-img",
    {
    duration: 0.3,
    width: "85%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )
   tl.to(
    ".home-img-left",
    {
    duration: 0.3,
    height: "40%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )
    }
    else if (laptop.matches) {

      tl.to(
        ".bg1",
      {
        delay:0.3,
        duration: 1,
        width: "50%",
       height:"0.6%",
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
  tl.to(
    ".bg1",
    {
      delay:0.5,
      duration: 1,
      height: "55%",
      ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    "#textDiv1",
    {
      duration:0.7,
      opacity:1,
      strokeOpacity: 1,
      ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.from(
    "#text1",
    {
      delay:0.4,
      duration:1.5,
      stagger:0.2,
      opacity: 1,
      y:0.6,
      ease: "Expo.easeInOut",
    },
   ) 
         tl.to(
         "#textDiv1",
         {
           duration:0.7,
           opacity:0,
           strokeOpacity: 1,
           ease: "Expo.easeInOut",
         },
         "-=.1"
        )
    tl.to(
      ".bg1",
      {
        delay:0.5,
        duration: 1,
        height: "0.6",
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".bg1",
    {
      delay:0.4,
      duration: 1,
      width: "50%",
     height:"0.4%",
      ease: "Expo.easeInOut",
    },
    "-=.1"
   )



   tl.to(
    ".bg2",
  {
    duration: 1,
    width: "50%",
   height:"0.6%",
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
tl.to(
".bg2",
{
  delay:0.3,
  duration: 1,
  height: "55%",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
"#textDiv2",
{
  duration:0.7,
  opacity:1,
  strokeOpacity: 1,
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.from(
"#text2",
{
  delay:0.4,
  duration:1,
  stagger:0.2,
  opacity: 1,
  y:2,
  ease: "Expo.easeInOut",
},
) 

tl.to(
  "#textDiv2",
  {
    duration:0.7,
    opacity:0,
    strokeOpacity: 1,
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
 tl.to(
  ".bg1",
{
  duration: 1,
  width: "0",
  height:"0",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
 duration: 1,
 height: "0.6",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
duration: 1,
width: "0%",
height:"0",
ease: "Expo.easeInOut",
},
"-=.1"
)


// Image Animation Down
tl.to(
  ".bgdown",
 {
  duration: 1,
  width: "50%",
 height:"0.6%",
  ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
 ".bgdown",
 {

 duration: 1,
 height: "55%",
 ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
  ".bgdown",
  {
   delay:0.5,
   duration: 1,
   height: "0.6",
   ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
  ".bgdown",
  {
  duration: 1,
  width: "50%",
  height:"0.2%",
  ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
    ".bgdown1",
   {
    duration: 1,
    width: "50%",
   height:"0.6%",
    ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
   ".bgdown1",
   {
   duration: 0.6,
   height: "55%",
   ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
    ".bgdown",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
    )
   tl.to(
    ".bgdown1",
    {
     delay:0.5,
     duration: 0.6,
     height: "0.6",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".bgdown1",
    {
      duration: 0.6,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".main-page",
    {

     duration: 1,
     width: "100%",
     height:"0.6%",
     background:" rgb(255, 225, 191)",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".main-page", {
    duration: 1,
    height:"100vh",
    background:"#000",
    zIndex:10,
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )



   tl.to(
    "#logo",
    {
      duration: 1,
    opacity: 1,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".text-one",
    {
      delay:0.2,
      duration: 1,
    opacity: 1,
    y:-40,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".text-one label",
    {
      delay:0.3,
      duration: 0.5,
    opacity: 1,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    "#africa",
    {
      duration: 1,
    opacity: 1,
    y:10,
    ease: "Expo.easeInOut",
    },
   )
   tl.to(
    ".btn-row",
      {
        duration: 0.5,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
   tl.to(
  ".hero-content-inner p",
    {
      delay:0.1,
      duration: 0.6,
    opacity: 1,
    y:24,
    ease: "Expo.easeInOut",
    },
   )
  tl.to(
    ".home-img",
    {
      delay:0.1,
      duration: 1,
    width: "0%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )
   tl.to(
    ".home-img",
    {
    duration: 0.3,
    width: "85%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )
   tl.to(
    ".home-img-left",
    {
    duration: 0.3,
    height: "40%",
    ease: 'power4.inOut',
    stagger: {
      amount: 0.2,
    },
    },
    "-=.1"
   )

    }
    else if (tablet.matches) {

       //  second animation start
       tl.to(".bg1",
       {
         delay:0.6,
         duration: 1,
         width: "70%",
        height:"0.5%",
         ease: "Expo.easeInOut",
       },
       "-=.1"
      )
   tl.to(
     ".bg1",
     {
       duration: 1,
       height: "45%",
       ease: "Expo.easeInOut",
     },
     "-=.1"
    )
    tl.to(
     "#textDiv1",
     {
       duration:0.7,
       opacity:1,
       strokeOpacity: 1,
       ease: "Expo.easeInOut",
     },
     "-=.1"
    )
    tl.from(
     "#text1",
     {
       delay:1.4,
       duration:1.5,
       stagger:0.2,
       opacity: 1,
       y:10,
       ease: "Expo.easeInOut",
     },
    ) 
    tl.to(
      "#textDiv1",
      {
        duration:0.7,
        opacity:0,
        strokeOpacity: 1,
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
 tl.to(
   ".bg1",
   {
     delay:0.6,
     duration: 1,
     height: "0.6",
     ease: "Expo.easeInOut",
   },
   "-=.1"
  )
  tl.to(
   ".bg1",
 {
   duration: 1,
   width: "0%",
  height:"0",
   ease: "Expo.easeInOut",
 },
 "-=.1"
)



tl.to(
 ".bg2",
{
 duration: 1,
 width: "70%",
height:"0.6%",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
delay:0.6,
duration: 1,
height: "45%",
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
"#textDiv2",
{
duration:0.7,
opacity:1,
strokeOpacity: 1,
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.from(
"#text2",
{
delay:0.4,
duration:1.5,
stagger:0.2,
opacity: 1,
y:1,
ease: "Expo.easeInOut",
},
) 
tl.to(
  "#textDiv2",
  {
    duration:0.7,
    opacity:0,
    strokeOpacity: 1,
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
 tl.to(
  ".bg1",
{
  duration: 1,
  width: "0",
  height:"0",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
 duration: 1,
 height: "0.6",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
duration: 1,
width: "0%",
height:"0",
ease: "Expo.easeInOut",
},
"-=.1"
)


// Image Animation Down
tl.to(
  ".bgdown",
 {
  duration: 1,
  width: "70%",
 height:"0.6%",
  ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
 ".bgdown",
 {

 duration: 1,
 height: "45%",
 ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
  ".bgdown",
  {
   delay:0.5,
   duration: 1,
   height: "0.6",
   ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
  ".bgdown",
  {
  duration: 1,
  width: "80%",
  height:"0.2%",
  ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
    ".bgdown1",
   {
    duration: 1,
    width: "70%",
   height:"0.6%",
    ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
   ".bgdown1",
   {
   duration: 0.6,
   height: "45%",
   ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
    ".bgdown",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
    )
   tl.to(
    ".bgdown1",
    {
     delay:0.5,
     duration: 0.6,
     height: "0.6",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".bgdown1",
    {
      duration: 0.6,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".main-page",
    {

     duration: 1,
     width: "100%",
     height:"0.6%",
     background:" rgb(255, 225, 191)",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".main-page", {
    duration: 1,
    height:"100vh",
    background:"#000",
    zIndex:10,
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   
     //  second animation end


     tl.to(
      "#logo",
      {
        duration: 1,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
    
    tl.to(
      ".home-img",
      {
        delay:0.2,
        duration: 1,
      width: "0%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".home-img",
      {
      duration: 0.3,
      width: "50%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".home-img-left",
      {
      duration: 0.3,
      height: "40%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".text-one",
      {
        duration: 0.3,
      opacity: 1,
      y:-40,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".text-one label",
      {
        duration: 0.1,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      "#africa",
      {
        duration: 0.2,
      opacity: 1,
      x:360,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".btn-row",
        {
          delay:0.2,
          duration: 0.5,
        opacity: 1,
        ease: "Expo.easeInOut",
        },
       )
     tl.to(
    ".hero-content-inner p",
      {
        delay:0.1,
        duration: 0.6,
      opacity: 1,
      y:24,
      ease: "Expo.easeInOut",
      },
     )

    }
     else if (phone.matches){
    
   
    //  second animation start
    tl.to(".bg1",
        {
          duration: 0.7,
          width: "80%",
         height:"0.5%",
          ease: "Expo.easeInOut",
        },
        "-=.1"
       )
    tl.to(
      ".bg1",
      {
        delay:0.6,
        duration: 0.7,
        height: "45%",
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      "#textDiv1",
      {
        duration:0.7,
        opacity:1,
        strokeOpacity: 1,
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.from(
      "#text1",
      {
        delay:1,
        duration:1.5,
        stagger:0.2,
        opacity: 1,
        y:2,
        ease: "Expo.easeInOut",
      },
     ) 
     tl.to(
      "#textDiv1",
      {
        duration:0.7,
        opacity:0,
        strokeOpacity: 1,
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
 tl.to(
   ".bg1",
   {
     delay:0.7,
     duration: 0.6,
     height: "0.6",
     ease: "Expo.easeInOut",
   },
   "-=.1"
  )
  tl.to(
   ".bg1",
 {
  duration: 0.6,
   width: "80%",
   height:"0.4%",
   ease: "Expo.easeInOut",
 },
 "-=.1"
)



tl.to(
 ".bg2",
{
  duration: 0.6,
 width: "80%",
height:"0.6%",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
  duration: 0.6,
height: "45%",
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
"#textDiv2",
{
duration:0.7,
opacity:1,
strokeOpacity: 1,
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.from(
"#text2",
{
delay:0.7,
duration:1.5,
stagger:0.2,
opacity: 1,
y:3,
ease: "Expo.easeInOut",
},
) 
tl.to(
  "#textDiv2",
  {
    duration:0.7,
    opacity:0,
    strokeOpacity: 1,
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
 tl.to(
  ".bg1",
{
  duration: 1,
  width: "0",
  height:"0",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
 duration: 1,
 height: "0.6",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
duration: 1,
width: "0%",
height:"0",
ease: "Expo.easeInOut",
},
"-=.1"
)


// Image Animation Down
tl.to(
  ".bgdown",
 {
  duration: 1,
  width: "80%",
 height:"0.6%",
  ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
 ".bgdown",
 {

 duration: 1,
 height: "45%",
 ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
  ".bgdown",
  {
   delay:0.5,
   duration: 1,
   height: "0.6",
   ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
  ".bgdown",
  {
  duration: 1,
  width: "80%",
  height:"0.2%",
  ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
    ".bgdown1",
   {
    duration: 1,
    width: "80%",
   height:"0.6%",
    ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
   ".bgdown1",
   {
   delay:0.2,
   duration: 1,
   height: "45%",
   ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
    ".bgdown",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
    )
   tl.to(
    ".bgdown1",
    {
     delay:0.5,
     duration: 1,
     height: "0.6",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".bgdown1",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".main-page",
    {
     delay:0.7,
     duration: 0.7,
     width: "100%",
     height:"0.6%",
     background:" rgb(255, 225, 191)",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".main-page", {
    duration: 1,
    height:"100vh",
    background:"#000",
    zIndex:10,
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".bg-bottom", {
    duration: 0.4,
    height:"10vh",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
     //  second animation end

     tl.to(
      "#logo",
      {
        duration: 1,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )

    
    tl.to(
      ".home-img",
      {
        delay:0.1,
        duration: 1,
      width: "0%",
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
      },
      "-=.1"
     )
     tl.to(
      ".home-img",
      {
      duration: 0.3,
      width: "50%",
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
      },
      "-=.1"
     )
     tl.to(
      ".home-img-left",
      {
      duration: 0.3,
      height: "40%",
      ease: 'power4.inOut',
      stagger: {
        amount: 0.2,
      },
      },
      "-=.1"
     )
     tl.to(
      ".text-one",
      {
        duration: 1,
      opacity: 1,
      y:-40,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".text-one label",
      {
        delay:0.3,
        duration: 0.5,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      "#africa",
      {
        duration: 1,
      opacity: 1,
      y:-10,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".btn-row",
        {
          duration: 0.5,
        opacity: 1,
        ease: "Expo.easeInOut",
        },
       )
     tl.to(
    ".hero-content-inner p",
      {
        delay:0.1,
        duration: 0.6,
      opacity: 1,
      y:24,
      ease: "Expo.easeInOut",
      },
     )

  } 
  else{

       tl.to(
        ".bg1",
        {
          delay:0.6,
          duration: 0.6,
          width: "80%",
         height:"0.5%",
          ease: "Expo.easeInOut",
        },
        "-=.1"
       )
       tl.to(
        ".bg1",
        {
          delay:0.5,
          duration: 1,
          height: "45%",
          ease: "Expo.easeInOut",
        },
        "-=.1"
       )
       tl.to(
        "#textDiv1",
        {
          duration:0.5,
          opacity:1,
          strokeOpacity: 1,
          ease: "Expo.easeInOut",
        },
        "-=.1"
       )
       tl.from(
        "#text1",
        {
          delay:0.3,
          duration:1.5,
          stagger:0.2,
          opacity: 1,
          ease: "Expo.easeInOut",
        },
       ) 
    
    tl.to(
      "#textDiv1",
      {
        duration:0.5,
        opacity:0,
        strokeOpacity: 1,
        ease: "Expo.easeInOut",
      },
      "-=.1"
     )
 tl.to(
   ".bg1",
   {
     delay:0.4,
     duration: 1,
     height: "0.6",
     ease: "Expo.easeInOut",
   },
   "-=.1"
  )
  tl.to(
   ".bg1",
 {
   duration: 1,
   width: "80%",
   height:"0.4%",
   ease: "Expo.easeInOut",
 },
 "-=.1"
)



tl.to(
 ".bg2",
{
 duration: 1,
 width: "80%",
height:"0.6%",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
delay:0.6,
duration: 0.6,
height: "45%",
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
"#textDiv2",
{
duration:0.7,
opacity:1,
strokeOpacity: 1,
ease: "Expo.easeInOut",
},
"-=.1"
)
tl.from(
"#text2",
{
delay:0.7,
duration:1,
stagger:0.2,
opacity: 1,
y:1,
ease: "Expo.easeInOut",
},
) 
tl.to(
  "#textDiv2",
  {
    duration:0.7,
    opacity:0,
    strokeOpacity: 1,
    ease: "Expo.easeInOut",
  },
  "-=.1"
 )
 tl.to(
  ".bg1",
{
  duration: 1,
  width: "0",
  height:"0",
  ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
 duration: 1,
 height: "0.6",
 ease: "Expo.easeInOut",
},
"-=.1"
)
tl.to(
".bg2",
{
duration: 1,
width: "0%",
height:"0",
ease: "Expo.easeInOut",
},
"-=.1"
)


// Image Animation Down
tl.to(
  ".bgdown",
 {
  duration: 1,
  width: "80%",
 height:"0.6%",
  ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
 ".bgdown",
 {

 duration: 1,
 height: "45%",
 ease: "Expo.easeInOut",
 },
 "-=.1"
 )
 tl.to(
  ".bgdown",
  {
   delay:0.3,
   duration: 1,
   height: "0.6",
   ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
  ".bgdown",
  {
  duration: 1,
  width: "80%",
  height:"0.2%",
  ease: "Expo.easeInOut",
  },
  "-=.1"
  )
  tl.to(
    ".bgdown1",
   {
    duration: 0.8,
    width: "80%",
   height:"0.6%",
    ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
   ".bgdown1",
   {
   duration: 0.6,
   height: "45%",
   ease: "Expo.easeInOut",
   },
   "-=.1"
   )
   tl.to(
    ".bgdown",
    {
    duration: 0.6,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
    )

    tl.to(
    ".bgdown1",
    {
    duration: 1,
    width: "0%",
    height:"0",
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
   tl.to(
    ".main-page",
    {
     delay:0,
     duration: 1,
     width: "100%",
     height:"0.6%",
     background:"rgb(255, 225, 191)",
     ease: "Expo.easeInOut",
    },
    "-=.1"
    )
    tl.to(
    ".main-page", {
    duration: 1,
    height:"100vh",
    background:"#000",
    zIndex:10,
    ease: "Expo.easeInOut",
    },
    "-=.1"
   )
  
     //  second animation end


     tl.to(
      "#logo",
      {
        duration: 1,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
   
    tl.to(
      ".home-img",
      {
        delay:0.2,
        duration: 1,
      width: "0%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".home-img",
      {
      duration: 0.3,
      width: "50%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".home-img-left",
      {
      duration: 0.3,
      height: "40%",
      ease: "Expo.easeInOut",
      },
      "-=.1"
     )
     tl.to(
      ".text-one",
      {
        delay:0.6,
        duration: 0.7,
      opacity: 1,
      y:-40,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".text-one label",
      {
        delay:0.3,
        duration: 0.5,
      opacity: 1,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      "#africa",
      {
        delay:0.2,
        duration: 1,
      opacity: 1,
      y:-10,
      ease: "Expo.easeInOut",
      },
     )
     tl.to(
      ".btn-row",
        {
          delay:0.2,
          duration: 0.5,
        opacity: 1,
        ease: "Expo.easeInOut",
        },
       )
     tl.to(
    ".hero-content-inner p",
      {
        delay:0.1,
        duration: 0.6,
      opacity: 1,
      y:24,
      ease: "Expo.easeInOut",
      },
     )
  } 
}
const tablet=window.matchMedia("(min-width:500px)");
const phone=window.matchMedia("(min-width:335px)");
const laptop =window.matchMedia("(min-width:900px)");
const mediaQuery =window.matchMedia("(min-width:1300px)");
conditional(mediaQuery)
mediaQuery.addListener(conditional);
tablet.addListener(conditional);
phone.addListener(conditional);
laptop.addListener(conditional);
}




export const exploreAnim =()=>{
  let tl = gsap.timeline();
   //  first animation start
   const conditional=(mediaQuery)=>{
    if(mediaQuery.matches){
      tl.to(
        ".header",
          {
            opacity:1,
            duration: 0.8,
          ease: "Expo.easeInOut",
          },
         )

    }else if(tablet.matches){
      tl.to(
        ".header",
          {
            opacity:1,
            duration: 0.8,
          ease: "Expo.easeInOut",
          },
         )
    }else if (phone.matches){
      tl.to(
        ".header",
          {
            opacity:1,
            duration: 0.8,
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          "#a-link",
            {
              delay:1,
              opacity:1,
              y:15,
              duration: 1.4,
            ease: "Expo.easeInOut",
            },
           )
           tl.to(
            ".place-img .gatsby-image-wrapper-constraine ",
              {
                delay:0.1,
                opacity:0.9,
               scale:4,
                duration: 1.4,
              ease: "Expo.easeInOut",
              },
             )
    } else{
      tl.to(
        ".header",
          {
            opacity:1,
            duration: 0.8,
          ease: "Expo.easeInOut",
          },
         )
 
     
    }
  }
  const tablet=window.matchMedia("(min-width:500px)");
const phone=window.matchMedia("(min-width:335px)");
const mediaQuery =window.matchMedia("(min-width:900px)");
conditional(mediaQuery)
mediaQuery.addListener(conditional);
tablet.addListener(conditional);
phone.addListener(conditional);

}




export const detailAnim =()=>{
  let tl = gsap.timeline();
   //  first animation start
   const conditional=(mediaQuery)=>{
    if(mediaQuery.matches){
      tl.to(
        "#draw",
          {
            delay:4.1,
            duration: 1.2,
          width:"70px",
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
         ".place-title",
         {
           delay:0.7,
           duration: 1.2,
         opacity:0.7,
         ease: "Expo.easeInOut",
         },
        )
        tl.to(
          "#desc",
          {
            delay:0.4,
            duration: 0.8,
          opacity:1,
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          ".text-grid",
            {
              delay:0.5,
              duration: 1.2,
            opacity:1,
            ease: "Expo.easeInOut",
            },
           )
          

    }else if(tablet.matches){
      tl.to(
        "#draw",
          {
            delay:4.1,
            duration: 1.2,
          width:"70px",
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          "#desc",
          {
            delay:0.4,
            duration: 0.8,
          opacity:1,
          ease: "Expo.easeInOut",
          },
         )
        tl.to(
          "#desc",
          {
            delay:0.4,
            duration: 0.8,
          x:-2,
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          ".place-title",
          {
            delay:0.2,
            duration: 1.2,
          opacity:1,
          ease: "Expo.easeInOut",
          },)

    }else if (phone.matches){
      tl.to(
        "#draw",
          {
            delay:4.1,
            duration: 1.2,
          width:"70px",
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          ".place-title",
          {
            delay:0.2,
            duration: 1.2,
          opacity:1,
          ease: "Expo.easeInOut",
          },)
     
    } else{
      tl.to(
        "#draw",
          {
            delay:4.1,
            duration: 1.2,
          width:"70px",
          ease: "Expo.easeInOut",
          },
         )
         tl.to(
          ".place-title",
          {
            delay:0.2,
            duration: 1.2,
          opacity:1,
          ease: "Expo.easeInOut",
          },)
     
    }
  }
  const tablet=window.matchMedia("(min-width:500px)");
const phone=window.matchMedia("(min-width:335px)");
const mediaQuery =window.matchMedia("(min-width:900px)");
conditional(mediaQuery)
mediaQuery.addListener(conditional);
tablet.addListener(conditional);
phone.addListener(conditional);

}


