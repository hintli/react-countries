import React from 'react';
import Navbar from './components/Navbar';
//import Home from './components/Home';
import CountryList from './components/CountryList';
import Country from './components/Country';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Route path="/" component={CountryList} exact/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:name" component={Country} />
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
