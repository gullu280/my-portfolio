import React from 'react'
import Project from './Project'
import NavBar from './NavBar'
import PortfolioSec from './PortfolioSec'
import IntroductionSec from './IntroductionSec'
import ImageSec from './ImageSec'
import Testimonial from './Testimonial'
import Contact from './Contact'
import Experience from './Experience'
import Skills from './Skills'
import img from "/src/image/img1.jpg"
function Home() {
  // const imageUrl = 'https://via.placeholder.com/1200x600';
  return (
   <>
   <div>
     
      <div className="flex flex-col md:flex-row">
        <PortfolioSec />
        <ImageSec imageUrl={img} />
        <IntroductionSec />
      </div>
     

    </div>
    <section id="project">
   <Project/>
   </section>
   <section id="work">
   <Experience/>
   </section>
   <section id="testimonial">
   <Testimonial/>
   </section>
   <section id="skill">
   <Skills/>
   </section>
   <section id="contact">
   <Contact/>
   </section>
   </>
     
  )
}

export default Home
