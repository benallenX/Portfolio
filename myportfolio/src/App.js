import{useState,useEffect} from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Dropdown from './components/Navbar/DropDown/Dropdown'
import { Switch,Route } from 'react-router-dom'



function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
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
     <Footer />
    </>
  );
}

export default App;
