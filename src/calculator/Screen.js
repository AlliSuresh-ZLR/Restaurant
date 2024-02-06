import React from 'react'
import BottonsDiv from './BottonsDiv'

const Screen = ({input,setInput}) => {
  return (
    <div>
        <input className ="input" type='text' value={input}/>
    </div>
  )
}

export default Screen