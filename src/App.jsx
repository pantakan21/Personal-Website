import Header from './Components/Header/Header'
import Edu_Work from "./Components/Edu_Work/Edu_Work"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import ContactMe from "./Components/ContactMe/ContactMe"
import Preloader from './Components/Preloader/Preloader'
import React, { useState, useEffect } from 'react'

const App = () => {
    const [loading, setLoading] = useState(true);

    const handlePreloaderComplete = () => {
        setLoading(false);
    };

    return (
        <div className="app">
            {loading ? (
                <Preloader onComplete={handlePreloaderComplete} />
            ) : (
                <>
                    <Header />
                    <Edu_Work />
                    <Skills />
                    <Projects />
                    <ContactMe />
                </>
            )}
        </div>
    )
}

export default App
