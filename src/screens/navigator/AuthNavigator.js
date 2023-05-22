import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../redux/slicer/user';
import '../../login.css';
const AuthNavigator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form id="accesspanel" action="login" method="post">
      <h1 id="litheader">Word App</h1>
      <div className="inset">
        <p>
          <input
            type="text"
            name="username"
            id="email"
            value={email}
            onChange={emailChangeHandler}
            placeholder="Email Adresi"
          />
        </p>
        <p>
          <input
            onChange={passwordChangeHandler}
            type="password"
            value={password}
            name="password"
            id="password"
            placeholder="Şifre"
          />
        </p>

        <input
          className="loginLoginValue"
          type="hidden"
          name="service"
          value="login"
        />
      </div>
      {error && (
        <p style={{ textAlign: 'center', marginBottom: '10px' }}>{error}</p>
      )}
      <p className="p-container">
        <input
          type="button"
          name="Login"
          id="go"
          value={'Giriş Yap'}
          onClick={() => {
            dispatch(signIn({ email, password }));
          }}
        />
      </p>
    </form>
  );
};

export default AuthNavigator;
