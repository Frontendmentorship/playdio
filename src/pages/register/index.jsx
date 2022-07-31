/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import OnboardLayout from '../../layouts/OnboardLayout';
import Logo from '../../assets/Playdio_Logo.png';
import OnboardInput from '../../components/OnboardInput';
import OnboardRadio from '../../components/OnboardRadio';
import OnboardButton from '../../components/OnboardButton';

function Register() {
  return (
    <OnboardLayout>
      <form className="onboard-form" action="">
        <div className="form__header">
          <img src={Logo} alt="Playdio Logo" />
          <h2>Sign up to Playdio</h2>
        </div>
        <div className="form__body">
          <OnboardInput label="Email" type="email" />
          <OnboardInput label="Choose a Username" autocomplete="new-password" type="text" />
          <OnboardInput label="Password" type="password" autocomplete="new-password" />
          <OnboardInput label="Confirm Password" type="password" autocomplete="new-password" />
          <div className="gender-buttons">
            <label>What&quot;s your Gender?</label>
            <OnboardRadio label="Male" name="gender" id="male-gender" />
            <OnboardRadio label="Female" name="gender" id="female-gender" />
          </div>
          <div className="submit-btn-wrapper">
            <OnboardButton type="submit">Sign up</OnboardButton>
          </div>
        </div>
        <div className="form__footer">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </form>
    </OnboardLayout>
  );
}

export default Register;
