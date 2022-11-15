import React from 'react';
import { Navigate , useLocation} from 'react-router-dom';
import Login from './pages/Login'
import './App.css'
import Router from './router';
const RouterBeforeEach = ({children}) => {
   const location = useLocation()
   if(localStorage.getItem('my-app-token')){
     return children
   }else{
    // 不判断就会死循环
    if(location.pathname === '/login'){
      return <Login />
    }else{
      return <Navigate to="/login" replace/>
    }   
   }
}
function App () {
  return (
    <div className='app'>
      <RouterBeforeEach>
        <Router/>
      </RouterBeforeEach>
    </div>
  )
}
export default App