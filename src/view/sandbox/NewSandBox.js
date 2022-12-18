import React,{useState} from 'react'
import {NavLink} from 'react-router-dom'
export default function NewSandBox() {
  const [name,setName]=useState("none")
  const show=()=>{
    if(name==="none"){
      setName("block")
    }else{
      setName("none")
    }
    
  }
  return (
    <div>
     <NavLink to="/films/nowPlaying">电影</NavLink>
    </div>
  )
}
