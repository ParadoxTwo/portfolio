
import './App.scss';
import { useState } from 'react';
import Topbar from './Components/Topbar/Topbar';
import Introduction from './Components/Introduction/Introduction';
import Portfolio from './Components/Portfolio/Portfolio';
import Projects from './Components/Projects/Projects';
import Testimonials from './Components/Testimonials/Testimonials';
import Contacts from './Components/Contacts/Contacts';
import Menu from './Components/Menu/Menu';

function App() {
  const [menuOpened, toggleMenu] = useState(false)
  return (
    <div className='app'>
      <Topbar menuOpened={menuOpened} toggleMenu={toggleMenu}/>
      <Menu menuOpened={menuOpened} toggleMenu={toggleMenu}/>
      <div className="sections">
        <Introduction/>
        <Portfolio/>
        <Projects/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
