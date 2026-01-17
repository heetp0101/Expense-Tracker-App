import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import 'local-storage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Test from './pages/Test';
import {auth} from './firebase'

function App() {



  let flag = false;

  const [IsLoggedIn, setIsLoggedIn] = useState(flag);


  return ( 
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
            <Route path='/test' element={<Test />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/authenticated' element={<Authenticated />} */}
            {/* Default route for unauthenticated users */}
            {/* <Route path='/transaction' element={<Transactions username={username}/>}/> */}
          </Routes>
      </BrowserRouter>
  );
}

export default App;
