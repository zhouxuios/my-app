
import {Navigate,useRoutes} from 'react-router-dom'
import Home from '../pages/commonLayout'
import Login from '../pages/Login'
import Nav1 from '../pages/Nav1';
import Nav2 from '../pages/Nav2';
import Nav3 from '../pages/Nav3';
const routes = [
   {
     path: '/',
     element: <Navigate to="/nav1"/>
   },
   {
     path: '/',
     element: <Home/>,
     children:[
       {
        path:'/nav1',
        element:<Nav1/>
       },
       {
        path:'/nav2',
        element:<Nav2/>
       },
       {
        path:'/nav3',
        element:<Nav3/>
       }
     ]
   },
   {
      path: '/login',
      element: <Login/>
   },
   {
      path: '*',
      element: <Navigate to="/nav1"/>
   }
]
const Router = () => {
    return useRoutes(routes)
}
export default Router
