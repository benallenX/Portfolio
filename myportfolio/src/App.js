import{useState,useEffect} from 'react'
import {Navbar} from './components'
import{BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>
     
    </div>
  );
}

export default App;
