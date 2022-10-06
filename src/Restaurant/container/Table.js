import React, { useContext, useState } from 'react'
import {store} from '../Apprest'

function Table() {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const inactiveButton="btn btn-outline-primary m-2";
    const activeButton="btn btn-outline-primary m-2 active";
    const [number,setNumber]=useState(null);
    const [filter,setFilter,table,setTable]=useContext(store);

  return (
    <div>
        <center className="mt-2">
            <h3>Please select your table number</h3>
            {numbers.map((num,index)=><button  key={index} className={number===num?activeButton:inactiveButton} onClick={()=>{setNumber(num);setTable(num)}}>{num}</button>)}
        </center>
    </div>
  )
}

export default Table