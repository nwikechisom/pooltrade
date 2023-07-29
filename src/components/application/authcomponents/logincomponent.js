import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../features/Auth/authSlice';
import { login } from '../../../services/authService';
import { useDispatch } from 'react-redux';
import NotificationComponent, { ToastType } from '../toastComponents/notificationComponent';

export default function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      var response = await login({email: username, password: password});
      // Assuming successful login will set the authentication token in local storage or cookies
      // Redirect the user to the dashboard
      if(response != null)
      {
        window?.localStorage.setItem("jswt", response.access_token);
        console.log(response);
        dispatch(loginSuccess({ response }));
        navigate('/dashboard');
        return (<NotificationComponent type={ToastType.Success} message={"Login successful!"}/>) 
      }
      else console.log("Login Failed!")
      //else pop toast for failed login
      return (<NotificationComponent type={ToastType.Error} message={"Login failed!"}/>) 
    } catch (error) {
      // Handle login error
      //pop toast for failed login 
      <NotificationComponent type={ToastType.Error} message={error}/>    
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="bg-white">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
      <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <input className="pl-2 outline-none border-none" type="text" placeholder="Email Address" value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
          fill="currentColor">
          <path fill-rule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clip-rule="evenodd" />
        </svg>
        <input className="pl-2 outline-none border-none" type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
      <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Don't have an account? Create one.</span>
    </form>
  )
}
