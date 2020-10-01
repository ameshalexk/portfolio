import React from 'react';
import '../App.css';
import './HeroSection.css';
import ScriptTag from 'react-script-tag';

function HeroSection() {
  return (
    <div className='hero-container'>
      <section className="container">
        <div className="content">
            <h1>Projects I worked on during my 3 month bootcamp </h1>
            <p>Please scroll down</p>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 1</h1>
            <p>Minesweeper</p>
            <video id="chartjs" src='/videos/minesweeper.mp4' autoPlay loop muted />
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 2</h1>
            <p>T-Apparel - A T-shirt website</p>
            <video id="chartjs" src='/videos/tapparel.mp4' autoPlay loop muted />
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">   
            <div className="frame">
            <h1>Project 3</h1>
            <p>Coinstance - A Cryptocurrency trading platform</p>
            <video id="chartjs" src='/videos/coinstance.mp4' autoPlay loop muted />
            </div>
        </div>
    </section>
    <section className="container">
        <div className="content">
            <div className="frame">
            <h1>Project 4</h1>
            <p>CovidMapper - A map that shows realtime covid stats.</p>
            <video id="chartjs" src='/videos/covidmapper.mp4' autoPlay loop muted />
            </div>
        </div>
    </section>
    {/* <section className="container">
        <div className="content">
        <div className="frame">
        <h1>Some other projects</h1>
        <video id="chartjs" src='/videos/chartjs.mp4' autoPlay loop muted />
        <video id="chartjs" src='/videos/chartjs.mp4' autoPlay loop muted />
        </div>
        </div>
    </section> */}

    <div id="set-height">

    <video id="v0" tabIndex="0" autobuffer="autobuffer" preload="preload">
        <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="videos/fingers.mp4"></source>
    </video>
    <ScriptTag type="text/javascript" src="videos/sticky2.js" />
    <ScriptTag type="text/javascript" src="videos/sticky.js" />

        
    </div>
    

    </div>
  );
}
  
export default HeroSection;
