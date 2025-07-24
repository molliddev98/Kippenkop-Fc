import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

function Hero() {
    
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;
  return (
    <div className='hero' id='Hero'>

        <div className="blur hero-blur"></div>
        <div className='left-h'>
        <Header/>
{/* the best ad */}
        <div className="the-best-ad">
            <motion.div
            initial={{left: mobile? "165px": '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}></motion.div>
            <span>The best FC in South Tangerang</span>
        </div>

{/* Hero Heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Form </span>
                <span>Your</span>
            </div>
            <div>
                <span>Profesional Team</span>
            </div>
            <div>
                <span>
                Setiap hari minggu pagi kita melakukan rutinitas latihan bersama.
                </span>
            </div>
{/* figures  */}
        </div>
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={8} start={1} delay='2' preFix="+"/>
                    </span>
                    <span>Tim</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={97} start={50} delay='3' preFix="+"/>
                    </span>
                    <span>Members Joined</span>
                </div>
            </div>
{/* hero buttons */}
            <div className="hero-buttons">
                <button className='btn'>Join Grub</button>
                <button className='btn'>Album</button>
            </div>
        </div>
        <div className='right-h'>
            <a href='https://web.whatsapp.com/' 
            className='btn'>Contact</a>

            <motion.div
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className='heart-rate'>
                <img src={Heart} alt="Heart" />
                <span>Fun Match</span>
                <span>Mini Soccer</span>
            </motion.div>

{/* Hero Image */}
            <img src={hero_image} alt="Image" className='hero-image'/>
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={hero_image_back} alt="Image" className='hero-image-back'/>
        </div>
    </div>
  )
}

export default Hero