import React from 'react';
import OnboardInput from '../../components/OnboardInput';
import Radio from '../../components/Radio';
import Button from '../../components/Button';
import logo from '../../assets/Playdio_Logo.png';
import './index.css';

function Register() {
  return (
    <form className="register">
      <div className="register__logo">
        <img src={logo} alt="logo"></img>
      </div>
      <h1 className="register__heading">Sign up to Playdio</h1>

      <div className="register__fields">
        <OnboardInput label="Email" type="email" id="email"></OnboardInput>
        <OnboardInput label="Choose a Username" type="text" id="username"></OnboardInput>
        <OnboardInput label="Password" type="password" id="password"></OnboardInput>
        <OnboardInput label="Confirm Password" type="password" id="password-confirm"></OnboardInput>
      </div>

      <p className="register__radio-title">What's your Gender?</p>
      <div className="register__radios">
        <Radio id="gender" label="Male"></Radio>
        <Radio id="gender" label="Female"></Radio>
      </div>

      <Button type="submit" text="Sign up"></Button>

      <p className="has-account">
        Already have an account?{' '}
        <a href="login" title="Sign in">
          Sign in
        </a>
      </p>
    </form>
  );
}

export default Register;
