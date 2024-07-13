import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Education from './Pages/Education';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/project' element={<Project/>} />
          <Route path='/contact' element={<Contact/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
