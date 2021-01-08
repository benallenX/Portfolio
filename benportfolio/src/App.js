import './App.css';
import {Header,Info,Projects,Skills,Tools,Contact,Footer} from './components'

function App() {
  return (
    <div className="app">
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
