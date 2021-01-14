import{useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Dropdown from './components/Navbar/DropDown/Dropdown'
import Home from './components/Pages/Home'
import Info from './components/Pages/Info'
import Projects from './components/Pages/Projects'
import Skills from './components/Pages/Skills'
import Tools from './components/Pages/Tools'
import { Switch,Route } from 'react-router-dom'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 500 && isOpen) {
        setIsOpen(false)
        console.log('resize Me')
      }
    }
    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
     <Navbar toggle={toggle}/>
     <Dropdown isOpen={isOpen} toggle={toggle} />
     <Switch>
       <Route path='/' exact component={Home} />
       <Route path='/Info' exact component={Info} />
       <Route path='/Projects' exact component={Projects} />
     </Switch>
     <Header />
     <Projects />
     <Skills />
     <Tools />
     <Footer />
    </>
  );
}

export default App;
