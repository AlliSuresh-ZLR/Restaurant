import { FirebaseError } from 'firebase/app';
import React, { useState } from 'react'

function App1() {
    const [user,setuser]=useState("");
    const [userCredentials,setUserCredentials]=useState({userId:"",password:""});
    const changeHandler=(e)=>{
setUserCredentials({...userCredentials,[e.target.name]:e.target.value});
    }
    const  save=async (e)=>{
        e.preventDefault();
    //    await fetch('https://testfire-dccae-default-rtdb.firebaseio.com/userCredential.json',{
    //         method:'POST',
    //         body: JSON.stringify(userCredentials)

    //     }).then(alert("data posted successfully"))
    //     console.log(userCredentials);
    //     setUserCredentials({userId:"",password:""})


    }
  return (
    <center>
        
        <form >

        <input type="text" name='userId' placeholder='userId' onChange={changeHandler}/>
        <input type="password" name='password'placeholder='password' onChange={changeHandler}/>
        <button onClick={(e)=>{save(e)}}>submit</button>
        </form>
    </center>
  )
}

export default App1