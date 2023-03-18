import React from 'react'
import  './Programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';
import { NavLink } from 'react-router-dom';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to Aware you</span>
      </div>
      <div className="programs-categories">
            {programsData.map((program)=>(
                  <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span> 
                        <div className="join-now">
                        
                              <span><NavLink to={'/join'} style={{textDecoration:'none',color:'white'}}>Join Now</NavLink></span>
                              <img src={RightArrow} alt="" />
                              </div>
                  </div>
            )
            )}
      </div>
    </div>
  )
}

export default Programs