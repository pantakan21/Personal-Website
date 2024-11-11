import React from 'react'
import {assets} from "../../assets/assets"
import "./Skills.css"

const Skills = () => {
    return (
        <div className='skill'>
            <h1>SKILLS</h1>
            <div className="frontend-container">
                <p>Frontend</p>
                <div className="frontend-images-containers">
                    <div className="images-container">
                        <img src={assets.HTML} alt="" />
                        <p>HTML5</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.CSS} alt="" />
                        <p>CSS3</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.JavaScript} alt="" />
                        <p>JavaScript</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.Bootstrap} alt="" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.ReactImage} alt="" />
                        <p>React</p>
                    </div> 
                    <div className="images-container">
                        <img src={assets.TypeScript} alt="" />
                        <p>TypeScript</p>
                    </div> 
                </div>
            </div>
            <div className="backend-container">
                <p>Backend</p>
                <div className="backend-images-containers">
                    <div className="images-container">
                        <img src={assets.PHP} alt="" />
                        <p>PHP</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.MySQL} alt="" />
                        <p>MySQL</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.Nodejs} alt="" />
                        <p>Node.js</p>
                    </div>
                </div> 
            </div>
            <div className="other-container">
                <p>Other</p>
                <div className="other-images-containers">
                    <div className="images-container">
                        <img src={assets.Git} alt="" />
                        <p>Git</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.Figma} alt="" />
                        <p>Figma</p>
                    </div>
                    <div className="images-container">
                        <img src={assets.Postman} alt="" />
                        <p>Postman</p>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Skills
