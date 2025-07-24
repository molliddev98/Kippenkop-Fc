import React, { useRef } from 'react'
import './Go.css'
import emailjs from '@emailjs/browser';

const Go = () => {
    const form = useRef()
  return (
    <div className="go" id="go">
        <div className="left-j">
            <hr />
            <div>
            <span className='stroke-text'>Ready to</span>
            <span>Silaturahmi</span>
            </div>
            <div>
            <span>Play</span>
            <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-j">

            <form reff={form} className='email-container'>
                <input type="email" name='user_email' placeholder='Enter Your Email' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Go