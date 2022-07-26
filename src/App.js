import React from 'react';
import Login from './component/Login';
import './App.css';
import Users from "./component/users"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <> 
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Login />}/>
          
          <Route path="/home" element={<Users />}/>
          </Routes>
     
      </BrowserRouter>
 </>
  );
}

export default App;