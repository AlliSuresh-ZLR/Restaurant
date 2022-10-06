import React, { useState } from 'react'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import { createContext } from 'react'

export const store=createContext();
function Context() {
    const [data,setData]=useState([{
        brand:"apple"
    },
    {
        brand:"sony"
    },
    {
        brand:"realmi"
    }

]);
  return (
    <div>
        <store.Provider value={[data,setData]}>

        <center>
            <Comp2/>                                                                                                                                                                                                                                                                         
            <Comp1/>
        </center>
        </store.Provider>
    </div>
  )
}

export default Context