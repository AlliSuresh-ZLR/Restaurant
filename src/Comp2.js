import React from 'react'
import { useContext } from 'react'
import { store } from './Context'


function Comp2() {
  const [data,setData]=useContext(store);
  return (
    <div>{data.length}</div>
  )
}

export default Comp2