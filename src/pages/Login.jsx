import BackButton from '../components/BackButton';

import logo from '../assets/f8_logo.png';
import Input from '../components/Input';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../Context';

const Login = () => {
  const name = localStorage.getItem('name') ? localStorage.getItem('name') : null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const validateInputs = (email, password) => {
    const foundUser = users.find((user) => email === user.email);
    if (foundUser) {
      if (password === foundUser.password) {
        setUser((currentUser) => {
          return {
            ...currentUser,
            name: foundUser.name,
            email: email,
            password: password,
          };
        });
        localStorage.setItem('name', `${foundUser.name}`);
        navigate('/database');
      } else {
        setPassword('');
        alert('Incorrect password! Please try again.');
      }
    } else {
      setEmail('');
      alert('Email not found! Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    {
      email && password && validateInputs(email, password);
    }
  };

  useEffect(() => {
    if (name !== null) {
      navigate('/database');
    }
  }, [navigate, name]);

  return (
    <div className="login-page">
      <div className="login-page_image"></div>
      <div className="login-page_form-container">
        <div className="login-page_form-container--upper">
          <BackButton />
          <img className="f8-logo" src={logo} width={116} height={117} alt="f8_logo" />
        </div>
        <div className="login-page_form-container--lower">
          <h2>Account Login</h2>
          <h6>If you are already a member you can login with your email address and password.</h6>
          <form className="login-form" onSubmit={handleSubmit}>
            <Input label="Email address" type="email" name="emailAddress" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <label className="checkbox no-highlight">
              <input type="checkbox" className="checkbox_input" />
              Remember me
            </label>
            <button className="linear-orange-horizontal" type="submit">
              LOGIN
            </button>
          </form>
          <p>
            Dont have an account ? <span>Sign up here</span>{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
