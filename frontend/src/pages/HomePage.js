import React from 'react';
import '../styles/LoginSignUp.css'
import LoginPage from '../components/LoginPage';
import SignupPage from '../components/SignupPage';

const HomePage = () => {
  return (
    <div>
      <LoginPage/>
      <SignupPage/>
    </div>
  )
}

export default HomePage
