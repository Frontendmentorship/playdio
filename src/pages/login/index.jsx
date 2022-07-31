/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import OnboardLayout from '../../layouts/OnboardLayout';
import Logo from '../../assets/Playdio_Logo.png';
import OnboardInput from '../../components/OnboardInput';
import OnboardButton from '../../components/OnboardButton';

function Login() {
  return (
    <OnboardLayout>
      <form className="onboard-form" action="">
        <div className="form__header">
          <img src={Logo} alt="Playdio Logo" />
          <h2>Sign in to Playdio</h2>
        </div>
        <div className="form__body">
          <OnboardInput label="Email" type="email" />
          <OnboardInput label="Password" type="password" autocomplete="new-password" />
          <div className="submit-btn-wrapper">
            <OnboardButton type="submit">Sign in</OnboardButton>
          </div>
        </div>
        <div className="form__footer">
          <p>
            Don&quot;t have an account? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </form>
    </OnboardLayout>
  );
}

export default Login;
