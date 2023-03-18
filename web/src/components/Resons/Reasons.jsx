import React from 'react'
import './Reasons.css';
import image1 from '../../assets/r3.jpg';
import image2 from '../../assets/r1.png';
import image3 from '../../assets/r5.jpg';
import image4 from '../../assets/r6.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-r">
            {/*<img src={image1} alt="" />*/}
            <img src={image2} alt="" />
            {/*<img src={image3} alt="" />*/}
            {/*<img src={image4} alt="" />*/}

      </div>
      <div className="right-r">
            <span>Some Reasons</span>
            <div>
                  <span className='stroke-text'>Why </span>
                  <span>Follow us</span>
            </div>
             <div className='details-r'>
                  <div>
                   <img src={tick} alt=""></img>
                   <span>50+ Diseases Awareness</span>
                  </div>
                  <div>
                   <img src={tick} alt="" />
                   <span> Day to Day Calorie Tracking</span>
                  </div>
                  <div>
                   <img src={tick} alt="" />
                   <span>Warn Your Eating Habits</span>
                  </div>
                   <div>
                   <img src={tick} alt="" />
                   <span>Trusted By Users</span>
                   </div>
            </div>
            <span style={{
                  color: "var(--gray)",fontWeight: "normal",
            }}>OUR PARTNERS
            </span>
            <div className="partners">
                  <img src={nb} alt="" />
                  <img src={adidas} alt="" />
                  <img src={nike} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Reasons