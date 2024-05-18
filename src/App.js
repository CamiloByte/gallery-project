import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import  Cmasmas  from './components/Cmasmas';
import  Css  from './components/Css';
import  Go  from './components/Go';
import  Html  from './components/Html';
import  Java  from './components/Java';
import  Javascrip  from './components/Javascrip-logo';
import  Php  from './components/Php';
import  Python  from './components/Python';
import  Ruby  from './components/Ruby';
import  Rust  from './components/Rust';
import Navegation from './components/Navegation';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/c++' element={<Cmasmas/>}/>
      <Route path='/css' element={<Css/>}/>
      <Route path='/go' element={<Go/>}/>
      <Route path='/html' element={<Html/>}/>
      <Route path='/java' element={<Java/>}/>
      <Route path='/javascrip' element={<Javascrip/>}/>
      <Route path='/php' element={<Php/>}/>
      <Route path='/python' element={<Python/>}/>
      <Route path='/ruby' element={<Ruby/>}/>
      <Route path='/rust' element={<Rust/>}/>
    </Routes>
    <Navegation />
   </Router>
  );
}

export default App;
