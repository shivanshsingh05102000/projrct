import React from 'react'
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/back-image.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from 'number-counter';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
// import { motion } from 'framer-motion';
const Hero = () => {
  // const transition = {type: 'spring', duration: 3}
  return (
   <div className="hero" id='Home'>
    <div className="blur blur-h">
    </div>
       <div className="left-h">
         <Header/>
         <div className="the-best-ad">
          <div></div>
          {/* <motion.div
          intial={{left: '238px'}}
          whileInView={{left: '8px'}}
          transition={transition}
          ></motion.div> */}
          <span>The best website for your health</span>
         </div>
         <div className="hero-text">
          <div>
            <span className='stroke-text'>Know</span>
            <span> Your</span>
            </div>
            <div><span>Health Now</span>
            </div>
            <div className="span">
              In here we will help you to get aware of your diseases and you can easily get your Eating Habits on right track
            </div>
         </div>
         <div className="figures">
          <div>
             <span>
              <NumberCounter end={50} start={5} delay='4' preFix="+"/>
             </span>
             <span>Diseases Info</span>
            </div>
          <div>
            <span>
            <NumberCounter end={120} start={70} delay='4' preFix="+"/>
            </span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>
            <NumberCounter end={20} start={5} delay='4' preFix="+"/>
            </span>
            <span>Featured Tracks</span>
          </div>
         </div>
         <div className="hero-buttons">

          <button className="btn"><Link to='plans' smooth='true'>Get Started</Link></button>
          <button className="btn">Learn More</button>
         </div>
        </div>
       <div className="right-h">
        
          <button className='btn'><NavLink to={'/join'} style={{textDecoration:'none'}}>Join Now</NavLink></button>
        
        
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>102 BPM</span>
        </div>
        <img src={hero_image} alt="" className='hero-image'/>
        <img src={hero_image_back} alt=""className='hero-image-back' />

        <div className="calories">
          <img src={calories} alt="" />
          <div>
             <span> Calories Consumed</span>
             <span>170 kcal</span>
          </div>
        </div>
        </div>
   </div>
  )
}
export default Hero;