import React, { Component } from 'react';

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import  Contact from './components/Contact';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Special from './components/Special';
import Menu from './components/Menu';
import About from './components/About';
import Reviews from './components/Reviews';
import Item from './components/Item';

class App extends Component {
  render() {
    return (
      <div>

        <Container /> 

        <Header />

        <Navbar />

        <Special />


        <Menu />

        <About />


        <Reviews />

        <Item />

        <Contact />

        <Footer />
        
      </div>
    );
  }
}

export default App;
