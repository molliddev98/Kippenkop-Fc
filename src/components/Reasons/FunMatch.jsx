import React from 'react'
import './FunMatch.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'

const FunMatch = () => {
  return (
    <div className="fun-match" id='fun-match'>
        <div className="left-r">            
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
        </div>
        <div className="right-r">
            <span>Fun Match</span>

            <div>
                <span className='stroke-text'>why  </span>
                <span>choose us?</span>
            </div>

            <div className='details-r'>
            <div><img src={tick} alt=""></img>
            <span>More than 100+ players</span>
            </div>
            <div><img src={tick} alt="" />
            <span>Silaturahmi with others</span>
            </div>
            <div><img src={tick} alt="" />
            <span>Regardless of Age</span>
            </div>
            <div><img src={tick} alt="" />
            <span>Every Sunday play</span>
            </div>
            </div>
            <span style={{
                color: "var(--gray)",
                fontWeight: "normal"
            }}
            >
                we like
            </span>

            <div className="like">
                <img src={nb} alt="nb" />
                <img src={adidas} alt="adidas" />
                <img src={nike} alt="nike" />
                </div>
        </div>
    </div>
  )
}

export default FunMatch