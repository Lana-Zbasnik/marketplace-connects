/* This is my orientation file to switch between pages */

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Profile from './pages/profile';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
       
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/profile' element={<Profile/>} />
    </Routes>
    </Router>
);
}
  
export default App;
