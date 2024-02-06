import React, { useRef } from "react";
import { DISPLAY_BUTTONS } from "./constants";

const Button = ({ btn, input, setInput }) => {
  const btnRef = useRef();
  const inputHandler = () => {
    if (DISPLAY_BUTTONS.includes(btnRef.current.innerText)){
      if(["%","+","x","-"].includes(input.slice(-1))&&["%","+","x","-"].includes(btnRef.current.innerText)){
return null
      }
      setInput(input + btnRef.current.innerText);
    }else{
      btnRef.current.innerText=="="?setInput(eval(input)):setInput("")
      }
    //  setInput(eval(input))
    }
  

  return (
    <button ref={btnRef} className="btn" onClick={inputHandler}>
      {btn}
    </button>
  );
};

export default Button;
