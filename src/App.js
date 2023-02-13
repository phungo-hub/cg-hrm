import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/main/Home';
import Staff from './components/main/Staff';
import Department from './components/main/Department';
import Sidebar from './components/common/Sidebar';
import Report from './components/main/Report';
import Config from './components/main/Config';

function App() {
  return (
    <>
      <Sidebar/>

      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/department" element={<Department />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/report" element={<Report />} />
          <Route path="/config" element={<Config />} />

          {/* <Route path="/admin" element={<PrivateRoute role="Admin" />}>
            <Route path="/admin" element={<Admin />} />
          </Route> */}
          
      </Routes>
    </>
  );
}

export default App;
