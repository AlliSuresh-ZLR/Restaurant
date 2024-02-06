import React, { useState } from 'react'
import "./calc.css"
import Screen from './Screen'
import BottonsDiv from './BottonsDiv'

const CalcApp = ({children}) => {
  const [input,setInput] = useState("")
  return (
    <div className='layout'>
        <Screen {...{input,setInput}}/>
        <BottonsDiv {...{input,setInput}}/>

    </div>
  )
}

export default CalcApp