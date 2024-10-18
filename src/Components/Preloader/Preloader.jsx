import React, { useEffect, useState } from 'react'
import { assets } from "../../assets/assets"
import "./Preloader.css"

const Preloader = ({ onComplete }) => { 
    const [showImg, setShowImg] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowImg(false);
            if (onComplete) {
                onComplete();
            }
        }, 1500);

        return () => clearTimeout(timer); 
    }, [onComplete]);

    return (
        <div className = "preloader-container">
            {showImg && <img src={assets.PreloaderRoll}/>}
        </div>
    );
}

export default Preloader;
