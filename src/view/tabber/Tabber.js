import React from 'react'
import { NavLink } from 'react-router-dom'
import tabber from'./Tabber.module.css'
export default function Tabber() {
  return (
        <ul className={tabber.tabberUl}>
        <li className={tabber.tabberLi}><NavLink to="/films/nowPlaying" activeClassName={tabber.a}>电影</NavLink></li> 
        {/* activeClassName修改navlink默认的样式名 */}
    <li className={tabber.tabberLi}><NavLink to="/cinemas" activeClassName={tabber.a}>影院</NavLink></li>
        <li className={tabber.tabberLi}><NavLink to="/active" activeClassName={tabber.a}>咨询</NavLink></li>
        <li className={tabber.tabberLi}><NavLink to="/center" activeClassName={tabber.a}>我的</NavLink></li>
        </ul>
  )
}
