import React from 'react';
import './App.css';
import NavBar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Projects from './pages/Projects.js'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Minesweeper from './pages/Minesweeper.js'
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' exact component={Projects} />
        <Route path='/minesweeper' exact component={Minesweeper} />
        <Route path='/about' exact component={About} />
        
      
      </Switch> 
      <Footer/>
    </Router>
  );
}

export default App;
