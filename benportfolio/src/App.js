import './App.css';
import {Navbar,Header,Info,Projects,Skills,Tools,Contact,Footer} from './components'

function App() {
  return (
    <div className="app">
     <h1>Lets get Started</h1>
     <Navbar />
     <Header/>
     <Info />
     <Projects/>
     <Skills />
     <Tools />
     <Contact/>
     <Footer />
    </div>
  );
}

export default App;
