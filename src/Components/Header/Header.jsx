import React from 'react'
import { assets } from '../../assets/assets'
import "./Header.css"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Header = () => {
    return (
        <>
            <div id = "header" className="header">
                <div className="header-left">
                    <h1>Full Stack</h1>
                    <h1>Developer.</h1>
                    <p>Hi, I'm Pantakan Rungwannarat, a Fullstack Developer skilled in both frontend and backend development. I enjoy creating responsive, efficient web applications that bring ideas to life as seamless digital experiences.</p>
                    <AnchorLink className="anchor-link" href="#contact" offset={-120}>
                        <button className="header-contact">HIRE ME</button>
                    </AnchorLink>
                </div>
                <div className="header-right">
                    <img src={assets.Me} alt="" />
                </div>
                <div className="header-mobile">
                    <div className="header-mobile-info">
                        <h1>Full Stack</h1>
                        <h1>Developer.</h1>
                        <p>Hi, I'm Pantakan Rungwannarat, a Fullstack Developer skilled in both frontend and backend development. I enjoy creating responsive, efficient web applications that bring ideas to life as seamless digital experiences.</p>
                    </div>
                    <div className="header-mobile-image">
                        <img src={assets.Me} alt="" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Header
