import React from 'react'
import './Films.css'
import { NavLink } from 'react-router-dom'
import FilmsRouter from './FilmsRouter'
import { useEffect } from 'react'
export default function Films() {
   
return (
    <div>
        <div className="loop">焦点轮播图</div>
        <div className='title'>
            <span><NavLink to="/films/nowPlaying" activeClassName='a'>正在热映</NavLink></span>
            <span><NavLink to="/films/comingSoon" activeClassName='a'>即将上映</NavLink></span>
        </div>
        <FilmsRouter />
    </div>
)
}
