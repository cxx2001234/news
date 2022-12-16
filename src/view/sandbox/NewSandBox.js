import React,{useState} from 'react'

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
      <span onClick={show}>{name==="none"?"+":"-"}</span>
      <div style={{height:'500px',width:"500px",display:name,backgroundColor:"pink"}}>fghjkl</div>
    </div>
  )
}
