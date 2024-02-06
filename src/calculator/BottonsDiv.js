import React from 'react'
import Button from './Button'
import { DISPLAY_BUTTONS, EVALUATION_BUTTONS } from './constants'

const BottonsDiv = ({input,setInput}) => {
  console.log(input,setInput)
    const btns = [...DISPLAY_BUTTONS,...EVALUATION_BUTTONS]
  return (
    <div className='btndiv'>
        {btns.map((btn,i)=><Button  {...{btn,input,setInput}}/>)}
    </div>
  )
}

export default BottonsDiv