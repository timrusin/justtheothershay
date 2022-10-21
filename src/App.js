import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {

  return (
    <div className='home-page'>
        <Navbar />
          <Routes>
              <Route path="/*" element={<Home/>}/>
                <Route path="/gallery/:category" element={<Gallery/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </div>
  );
}

export default App;
