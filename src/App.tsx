import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <div className='App'>
      <h1>Hello world!</h1>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/details'>
            <li>About</li>
          </Link>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='details' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
