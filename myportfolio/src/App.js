import{useState,useEffect} from 'react'
import {Home} from './components'
import{BrowserRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
      </Router>
     
    </div>
  );
}

export default App;
