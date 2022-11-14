import React, { useState } from 'react'
import "../styles/signup.css"
import InputField from './InputField';
import { Link, useNavigate } from 'react-router-dom';
import { allUser } from '../redux/reducer/userReducer';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

const SignUp = () => {
  const [userName, setuserName] = useState('');
  const [userMail, setuserMail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) =>{
    switch (e.target.name) {
      case 'userName':
        setuserName(e.target.value);
        break;
      case 'enterPassword':
        setPassword(e.target.value);
        break;
      case 'userMail':
        setuserMail(e.target.value);
        break;
      default:
        break;
    }
    console.log(e.target.value);
  }
  
  const handleLogin = () => {
    const user = {
      userName: userName,
      password: password,
      email: userMail,
      id: uuid()
    }
    dispatch(allUser(user));
    navigate('/login')
  }

  return (
    
      <div className='Signup_page p-4'>
      <h1 className='Signup_heading m-auto'>Sign Up Here</h1>
      <InputField name="userName" id='userName' type='text' label='Username' onChange={handleChange} value={userName} />
      <InputField name="userMail" id='userMail' type='mail' label='Usermail' onChange={handleChange} value={userMail} />
      <InputField name="enterPassword" id='enterPassword' type='password' label='Password' onChange={handleChange} value={password} />
      <div className='d-flex row my-4 mx-2 justify-content-center'>
        <div className='Signup_button_div' onClick={handleLogin}>
          <div className='Signup_button'>
            <span>Sign up</span>
          </div>
        </div>
        <label className='login_label text-center mt-2' >Already have an account ? <Link className='text-decoration-none font-weight-bold' to={"/login"}>Log In</Link></label>
      </div>
    </div>
  )
}

export default SignUp;