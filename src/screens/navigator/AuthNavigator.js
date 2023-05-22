import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/slicer/user';

const AuthNavigator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="background">
        <div className="form">
          <h1 className="h1" style={{ textAlign: 'center', color: 'white' }}>
            Giriş Yap
          </h1>
          <div className="card">
            <div className="form-group">
              <div>
                <input
                  className="form-control col-sm-2"
                  onChange={emailChangeHandler}
                  type="text"
                  name=""
                  value={email}
                  id=""
                  placeholder="Email"
                />
              </div>
              <div style={{ marginTop: 10 }}>
                <input
                  className="form-control"
                  onChange={passwordChangeHandler}
                  type="password"
                  value={password}
                  name=""
                  id=""
                  placeholder="Şifre"
                />
              </div>
              <div style={{ justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    dispatch(signIn({ email, password }));
                  }}
                  style={{ marginTop: '10px' }}
                  className="btn btn-success"
                >
                  Giriş Yap
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthNavigator;
