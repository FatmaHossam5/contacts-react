import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Add from './Components/Add';
import Update from './Components/Update';




function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/'element={<Home/>}>
      
   

    </Route>
    <Route path='/add'element={<Add/>}></Route>
    <Route path='/update/:id'element={<Update/>}></Route>

  
  </Routes>
  
  </BrowserRouter>

  );
}

export default App;
