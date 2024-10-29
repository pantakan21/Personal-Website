import React from 'react'
import "./Projects.css"
import {assets} from "../../assets/assets.js"
import AnchorLink from "react-anchor-link-smooth-scroll"

const Projects = () => {
    return (
        <div className="projects">
            <h1>PROJECTS</h1>
            <hr />
            <div className="project-containers">
                <div className="project-container">
                    <img src={assets.WebPlaceholder1} alt="" />
                    <div className="project-container-info">
                        <h2>Personal Website</h2>
                        <p>This is my personal website, designed by me to showcase projects and connect with potential job opportunities as a Frontend Developer. Explore my work and feel free to reach out!</p>
                        <h2>Technologies used</h2>
                        <div className="project-container-info-wrap">
                            <div className="project-container-info-image">
                                <img src={assets.HTML} alt="" />
                                <p>HTML5</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.CSS} alt="" />
                                <p>CSS3</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.JavaScript} alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.ReactImage} alt="" />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <AnchorLink className="anchor-link" href="#header">
                        <p className="view-text hover">View project</p>
                    </AnchorLink>
                </div>
                <hr />
                <div className="project-container">
                    <img src={assets.GameForAutism} alt="" />
                    <div className="project-container-info">
                        <h2>Game for Autism Children</h2>
                        <p>University project in collaboration with the Prachinburi Early Childhood Development Center, developing a simple Android puzzle game to enhance the cognitive development of autistic children through engaging gameplay</p>
                        <h2>Technologies used</h2>
                        <div className="project-container-info-wrap">
                            <div className="project-container-info-image">
                                <img src={assets.CSharp} alt="" />
                                <p>C#</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.Unity} alt="" />
                                <p>Unity</p>
                            </div>
                        </div>
                    </div>
                    <a className="anchor-link" href= "https://play.google.com/store/apps/details?id=com.kmutnb.gamefordevelopmentautismchildren&pli=1" target="_blank" >
                        <p className="view-text hover">View project</p>
                    </a>
                </div>
                <hr />
                <div className="project-container">
                    <img src={assets.Incomming} alt="" />
                    <div className="project-container-info">
                        <h2>E-Commerce Website</h2>
                        <p>This is my e-commerce website, designed entirely by me, to showcase in my portfolio. It highlights my skills in web development and user-friendly design.</p>
                        <h2>Technologies used</h2>
                        <div className="project-container-info-wrap">
                            <div className="project-container-info-image">
                                <img src={assets.HTML} alt="" />
                                <p>HTML5</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.CSS} alt="" />
                                <p>CSS3</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.JavaScript} alt="" />
                                <p>JavaScript</p>
                            </div>
                            <div className="project-container-info-image">
                                <img src={assets.ReactImage} alt="" />
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                    <p className="view-text">In development</p>
                </div>
                <button className="viewmore-button">VIEW MORE</button>
            </div>
        </div>
    )
}

export default Projects
