import React from 'react'
import {Button} from './Button.js'
function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoplay loop muted />
            <h1> My Portfolio Website</h1>
            <p>Where should I begin? </p>
            <div className='hero-btns'>
                <Button 
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    Get Started
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
