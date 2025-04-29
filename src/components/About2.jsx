import React from 'react'
import './about2.css'
import care1 from '../assets/img/care11.jpeg';
import care2 from '../assets/img/care2.webp';
import care3 from '../assets/img/care3.webp';
export default function Home3() {
  return (
    <>
      <div className="bg-image">
        <div className="white-box rotate-bottom-normal">
          <div className="inner-box">
            <img className="img11" src={care1} alt="Step 1" /><br />
            <h3 class="holi">Holistic Health Care</h3><br />
            <p class="wee">Healthive, we believe in treating the <br />whole person, not just the symptoms.. <br />   health are addressed,</p>
         <br />  </div>
          <div className="inner-box">
            <img className="img22" src={care2} alt="Step 2" /><br />
            <h3 class="holi">Personalized Care.</h3><br />
            <p class="wee">Preventive medicine is the practice   <br /> health and well-being measures <br />health leading to well</p>
      <br />    </div>
          <div className="inner-box">
            <img className="img33" src={care3} alt="Step 3" /><br />
            <h3 class="holi">Preventive Medicine.</h3><br />
            <p class="wee">Personalized care involves tailoring   <br />treatment to the individual <br />  needs, and preferences of each</p>
           <br /></div>
        </div>
      </div>
      
    </>
  )
}
