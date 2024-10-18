import React from 'react'
import "./Edu_Work.css"
import {assets} from "../../assets/assets.js"

const Edu_Work = () => {
    return (
        <div className='edu-work'>
            <div className="edu-container">
                <div className="edu-title">
                    <h1>EDUCATION</h1>
                    <img src={assets.GraduationCap} alt="" />
                </div>
                <div className="edu-info">
                    <p>July 2022 - April 2024</p>
                    <p>Bachelor of Industrail Technology</p>
                    <p>King Mongkut's University of Technology North Bangkok</p>
                </div>
                <div className="edu-info">
                    <p>July 2020 - March 2022</p>
                    <p>Information Technology</p>
                    <p>Thaluang Cementhaianusorn Technical College</p>
                </div>
            </div>
            <div className="work-container">
                <div className="work-title">
                    <h1>WORK EXPERIENCE</h1>
                    <img src={assets.Briefcase} alt="" />
                </div>
                <div className="work-info">
                    <p>April 2023 - June 2023</p>
                    <p>TERO Entertainment Internship - Web Master Support</p>
                    <p>During my internship, I designed flowcharts, tested websites for bugs, created prototypes and kept workflows organized for smooth project execution.</p>
                </div>
            </div>
        </div>
    )
}

export default Edu_Work
