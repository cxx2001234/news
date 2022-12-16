import React from 'react'
import { HashRouter,Route,Routes,Navigate } from 'react-router-dom'
import Login from '../view/login/Login'
import NewsSandBox from '../view/sandbox/NewSandBox'
export default function indexRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={localStorage.getItem("token")?<NewsSandBox/>:<Navigate to='/login'/>}
          // localStorage.getItem("token")?<NewsSandBox/>:<Navigate to='/login'/>
        />
      </Routes>
    </HashRouter>
  )
}
