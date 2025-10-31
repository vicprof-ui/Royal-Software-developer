import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div className='hero'>
        <h1>FRONTEND DEVELOPER COURSE</h1>
        <p>Courses that will grant you access to become a FrontEnd Software Developer</p>
      <div className="container">
        <div className="child1">
          <h2>HTML Course</h2>
          <p>HTML helps to structure web pages <br />
          and web content for display in a web browser.</p>
        </div>
       <div className="child2">
       <h2>JAVASCRIPT</h2>
       <p>Javascript is an object oriented computer <br /> programming language  commonly used <br /> to create interactive effects within web browser</p>
       </div>

         <div className="child3">
          <h2>REACT</h2>
          <p>React is a component based Javascript library used to <br /> build dynamic and interactive user interfaces.</p>
         </div>
      </div>
    </div>
  )
}

export default Hero
