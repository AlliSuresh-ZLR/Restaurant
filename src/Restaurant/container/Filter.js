import React, { useState,useContext } from 'react'
import {store} from '../Apprest'


function Filter() {
    const prod=["All Items","Rice Items","Pizza","Cold Drinks","Hot Drinks"];
    const  [filter, setFilter] = useContext(store);
    
  return (
    <div>
        <center>
            <span className='h4 m-1'>Filter:</span>
            <select  className='m-1' name='All Items' onChange={(e)=>{setFilter(e.target.value);}}>
                {prod.map((item,index)=><option key={index} value={item}>{item}</option>)}
            </select>
            
            {/* <button className='btn btn-sm btn-primary' onClick={()=>{console.log(filter)}}>
                Submit</button> */}
        </center>
    </div>
  )
}

export default Filter