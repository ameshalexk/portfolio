import React from 'react';
import '../App.css';
import './HeroSection.css';
import ScriptTag from 'react-script-tag';

function HeroSection() {
  return (
    <div className='hero-container'>
      <section class="container">
        <div class="content">
            <h1>Some projects I worked on during the last 3 months </h1>
            <p>Please scroll down</p>

        </div>
    </section>

    <section class="container">
        <div class="content">
            <h1>Project 1</h1>
            <p>Minesweeper</p>
        </div>
    </section>

    <section class="container">
        <div class="content">
            <h1>Project 2</h1>
            <p>T-Apparel - A T-shirt website</p>
        </div>
    </section>

    <section class="container">
        <div class="content">
            <h1>Project 3</h1>
            <p>Coinstance - A Cryptocurrency trading platform</p>
        </div>
    </section>

    <section class="container">
        <div class="content">
            <h1>Project 4</h1>
            <p>CovidMapper - A map that shows realtime covid stats.</p>
        </div>
    </section>
    <section class="container">
        <div class="content">
        <h1>Some other projects</h1>


            <button>Scroll to Top</button>

        </div>

    </section>
    <video id="chartjs" src='/videos/2.mp4' autoPlay loop muted />

    <div id="set-height"></div>
    <video id="v0" tabindex="0" autobuffer preload>
        <source type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' src="videos/fingers.mp4"></source>
    </video>
    <ScriptTag type="text/javascript" src="videos/sticky2.js" />
    <ScriptTag type="text/javascript" src="videos/sticky.js" />

    </div>
  );
}
  
export default HeroSection;
