import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import X from '../../assets/x.png'
import Logo from '../../assets/Logo2.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className="footer">
            <div className="sosial-links">
            <a href="https://github.com/haimoll98">
            <img src={Github} alt="" style={{ width: '50px', height: '50px' }}/>
            </a>
            <a href="https://www.instagram.com/kippenkopfc/">
            <img src={Instagram} alt="" style={{ width: '50px', height: '50px' }}/>
            </a>
            <a href="https://www.threads.com/@kippenkopfc">
            <img src={X} alt="" style={{ width: '50px', height: '50px' }} />
            </a>
        </div>
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
        <div className='p'>
        <p>© 2025 By Mollid Dev </p>
        </div>
    </div>
  )
}

export default Footer