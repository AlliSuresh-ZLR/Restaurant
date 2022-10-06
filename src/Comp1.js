import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import { useContext } from 'react'
import { store } from './Context'


function Comp1() {
  const [data,setData]=useContext(store);
  const [input,setInput]=useState("");
  const addItem=(e)=>{
    if(e.key==="Enter"){

      setData([...data,{brand:input}])
      console.log(data);
    }
  }
  return (
    <div style={{width:"20%"}}>
      {data.map((item,index)=>(<h1 style={{background:"green"}}key={index}>{item.brand}</h1>))}
      <input type="text" onChange={(e)=>{setInput(e.target.value);}} onKeyDown={(e)=>{addItem(e)}}/>
    </div>
  )
}

export default Comp1