import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../slices/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate API call:
    const fakeUser = {
      name: 'Demo User',
      email,
      token: 'fake-token-123',
    };

    dispatch(setUserInfo(fakeUser));

    // Redirect to the page user was trying to access
    navigate(from, { replace: true });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>

        <button type="submit" className="btn btn-light my-3">Sign In</button>
      </form>
    </div>
  );
};

export default SignInPage;
