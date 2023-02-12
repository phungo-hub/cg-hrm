import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Staff from './components/main/Staff';
import Department from './components/main/Department';
import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <>
      <Sidebar/>

      <Routes>
        <Route path='/staff' element={<Staff/>}/>
        <Route path='/department' element={<Department/>}/>
      </Routes>
    </>
  );
}

export default App;
