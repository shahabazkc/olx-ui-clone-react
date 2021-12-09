import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import {Link} from 'react-router-dom';
export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupButton.current);
    signupButton.current.disabled = true;
    signupButton.current.innerText = 'Please wait...';

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:number
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  }
const signupButton = useRef()
return (
  <div>
    <div className="signupParentDiv">
      <img width="200px" height="200px" alt='logo' src={Logo}></img>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="fname"
          name="name"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          id="number"
          name="phone"
          defaultValue="Doe"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          defaultValue="Doe"
        />
        <br />
        <br />
        <button ref={signupButton}>Signup</button>
      </form>
      <Link to='/login' className='link' style={{color:'black'}}>Login</Link>
    </div>
  </div>
);
}
