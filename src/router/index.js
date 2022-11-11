
import {BrowserRouter , Routes, Route,Navigate} from 'react-router-dom'

import Layout from '../pages/commonLayout'
import Login from '../pages/Login'
import Nav1 from '../pages/Nav1';
import Nav2 from '../pages/Nav2';
import Nav3 from '../pages/Nav3';
import NotFound from '../pages/NotFound';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Layout/>}>
                    {/* Navigate组件 重定向 */}
                    <Route path='/' element={<Navigate to='/nav1'/>}></Route>
                    <Route path='/nav1' element={<Nav1/>}></Route>
                    <Route path='/nav2' element={<Nav2/>}></Route>
                    <Route path='/nav3' element={<Nav3/>}></Route>
                </Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router