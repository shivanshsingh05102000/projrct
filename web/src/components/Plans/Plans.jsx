import React from 'react'
import "./Plans.css";
import {plansData} from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
import { NavLink } from 'react-router-dom';
const Plans = () => {
  return (
    <div className="plans-conatainer">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="programs-header" style={{gap: '2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITH US</span>
      </div>
      <div className="plans">
            {plansData.map((plan,i)=>
             <div className="plan" key={i}>
                  {plan.icon}
                  <span>{plan.name}</span>
                  <span className="price">₹ {plan.price}</span>
                  <div className="features">
                        {plan.features.map((feature,i)=>(
                              <div className="feature">
                              <img src={whiteTick} alt="" />
                              <span key={i}>{feature}</span>
                              </div>
                        ))}
                  </div>
                  <div>
                        <span>See More Benefit -{'>'}</span>
                  </div>
                  <button className="btn">

                  <NavLink to={'/join'} style={{textDecoration:'none'}}>Join Now</NavLink>
                  </button>

             </div>
            )}
      </div>
    </div>
  )
}

export default Plans