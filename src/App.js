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


function App() {


  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

  const auth=getAuth(app);
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
