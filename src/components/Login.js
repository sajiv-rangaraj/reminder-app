import React, { useState } from 'react'
import InputField from './InputField';
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, checkUser } from '../redux/reducer/userReducer';
import { getDataFromLocal } from '../utils/LocalStorage';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'userName':
        setUserName(e.target.value);
        break;
    
      case 'password':
        setPassword(e.target.value);
        break;
    
      default:
        break;
    };
  };

  const handleClick = () => {
    const user = {
      userName: userName,
      password: password
    }
    dispatch(checkUser(user));
    if(getDataFromLocal('checkUser')) {
      const userDetails = getDataFromLocal('currentUser').id ? getDataFromLocal('currentUser') : {};
      dispatch(setUser(userDetails));
      navigate('/');
    }
  };

  return (
    <div className='login_page p-4'>
      <h1 className='login_heading m-auto'>User Login</h1>
      <InputField name="userName" id='userName' type='text' label='Username' onChange={handleChange} value={userName} />
      <InputField name="password" id='password' type='text' label='Password' onChange={handleChange} value={password} />
      <div className='d-flex row my-4 mx-2 justify-content-center'>
        <div className='login_button_div' onClick={handleClick} >
          <div className='login_button'>
            <span>Login</span>
          </div>
        </div>
        <label className='login_label text-center mt-2' >Create account ? <Link className='text-decoration-none font-weight-bold' to={"/signup"}>Sign up</Link></label>
      </div>
    </div>
  )
}

export default Login;