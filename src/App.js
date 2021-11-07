import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/index';
import FotosState from './Context/Fotos/fotosState';

function App() {
  return (
    <div className="App">
      <FotosState>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      </FotosState>
    </div>
  );
}

export default App;
