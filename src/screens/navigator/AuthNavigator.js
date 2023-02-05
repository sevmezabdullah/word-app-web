import React, { useState } from 'react';

const AuthNavigator = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <div className="background">
        <div className="flex-container">
          <h1 className="h1" style={{ textAlign: 'center', color: 'white' }}>
            Giriş Yap
          </h1>
          <div style={{ width: 400, padding: 8, height: 180 }} className="card">
            <div>
              <input
                className="form-control"
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
            <button style={{ marginTop: '10px' }} className="btn btn-success">
              Giriş Yap
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default AuthNavigator;
