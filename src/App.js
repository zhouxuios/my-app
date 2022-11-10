import React from 'react';
import './App.css'
import Layout from './pages/commonLayout'
import Login from './pages/Login'
import Nav1 from './pages/Nav1';
import Nav2 from './pages/Nav2';
import Nav3 from './pages/Nav3';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
function App () {
  return (
     <Router>
      <div className='app'>
        <Routes>
          <Route path='/'  element={<Layout/>}>
            <Route path='/Nav1' element={<Nav1/>}></Route>
            <Route path='/nav2' element={<Nav2/>}></Route>
            <Route path='/nav3' element={<Nav3/>}></Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
     </Router>
  )
}
export default App