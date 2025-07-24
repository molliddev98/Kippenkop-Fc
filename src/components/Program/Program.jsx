import React from 'react'
import './Program.css'
import { programsData } from '../../data/FunMatchData'

const Program = () => {
  return (
    <div className="Program">
{/* Header */}
        <div className="Program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Program</span>
            <span className='stroke-text' id='Program'>To shape you</span>
        </div>

        <div className="program-categories">
            {programsData.map((program)=>(
            <div className="category">
                {program.image}
                <span>{program.heading}</span><span></span><span>{program.details}</span>
                <div className="join-now"><span> </span></div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Program