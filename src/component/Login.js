import React,{useState } from 'react'
import './style/Login.css'
import { Link, useHistory } from 'react-router-dom'
import {auth} from '../firebased'

export default function Login() {
  
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const history=useHistory();
    const signIn=(e)=>{
        e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).
    then((auth)=>{
       
        if(auth){
            history.push('/');
            alert('you have sucessfully sign-in')
        }
    })
    .catch(error=>alert(error.message))




        // firebase login
    }
    const register=(e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push('/');
                alert('you have sucessfully Create a account')
            }
        })
        .catch(error=>alert(error) )

        // firebase resister
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img src='/images/amazonLoginLogo.png' />
            </Link>
            <div className='login_container'>
                <h1>sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={e=>setemail(e.target.value)} placeholder='enter email' />
                    <h5>password</h5>
                    <input type='password' value={password} onChange={e=>setpassword(e.target.value)} placeholder='enter password' />
                    <button type='submit' onClick={signIn}>sign in</button>
                </form>
                <p> By signing-in you agree to the AMAZON FAKE CLONE condition of use & sale.please see our privacy Notice , our Cookies Notice and our Intereested-Based Ads Notices</p>
                <button onClick={register}> Create your amazon account</button>
            </div>
        </div>
    )
}
