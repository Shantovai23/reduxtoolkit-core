import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {dataGet, loginAction, logoutAction} from './redux/action'
import './App.css';


function App() {

  const [phone,setPhone]=useState("")
  const dispatch=useDispatch()
  const auth=useSelector((state)=>state.auth)

  useEffect(()=>{
     dispatch(dataGet())
  },[])

  return (
    <div className="App">
    {auth.isAuth ? <div>
      <h5>Successfully you Logged in</h5>
      <div>
        <p>{auth?.data?.id}</p>
        <p>{auth?.data?.title}</p>
      </div>
      <button style={{margin:'20px'}} onClick={()=>{dispatch(logoutAction())}}>Logout</button>
    </div> :<div>
    <h4>Login</h4>
      <input type="text" name={phone} value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone Number'/>
      <button style={{margin:'20px'}} onClick={()=>{dispatch(loginAction(phone))
      console.log('working')}}>Login</button>
    </div>}
     
    </div>
  );
}

export default App;
