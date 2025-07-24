import React, { useState } from 'react'
import './Join.css'
import { Album } from '../../data/AlbumData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Join = () => {
    const transition = {type: 'spring', duration: 3}
    const [selected, setSelected] = useState(0);
    const tLenght = Album.length;
  return (
    <div className="join" id='Join'>
        <div className="left-t">
            <span>Album</span>
            <span className='stroke-text'>What's in</span>
            <span>our album</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition} 
            >{Album[selected].review}
            </motion.span>
            <span>
                <span style={{color: 'var(--green2)'}}>
                    {Album[selected].name}
                </span>{" "}
                - {Album[selected].status}
            </span>
        </div>
        <div className="right-t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}          
            src={Album[selected].image} alt="Album" />

            <div className="arrows">
                <img 
                onClick={()=>{
                    selected === 0
                    ? setSelected(tLenght - 1)
                    : setSelected((prev) => prev - 1);
                }}
                src={leftArrow} 
                alt="" />
                <img 
                onClick={() =>{
                    selected === tLenght - 1
                    ? setSelected(0)
                    : setSelected((prev) => prev + 1);
                }}
                src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Join