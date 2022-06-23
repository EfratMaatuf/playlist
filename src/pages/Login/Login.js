import "./Login.css";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
const userDb = { email: "efrat5454@gmail.com", pass: "123" };

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();

  const [userNameRegister, setUserNameRegister] = useState();
  const [userEmailRegister, setUserEmailRegister] = useState();
  const [userPassRegister, setUserPassRegister] = useState();

  const login = async (e) => {
    console.log("login");
    e.preventDefault();
    if (!userEmail) {
    }
    if (!userPass) {
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail, password: userPass })
    };
    const res = await fetch('http://localhost:3030/api/users/login', requestOptions)
    const data = await res.json()
    if (data.token) {
      localStorage.token = data.token
      setUser(userEmail)
    }
    else { console.log("error***"); }
    return data
  };
  const register = async (e) => {
    e.preventDefault();
    console.log("register");
    console.log(userNameRegister);
    console.log(userEmailRegister);
    console.log(userPassRegister);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmailRegister, password: userPassRegister, name: userNameRegister })
    };
    const res = await fetch('http://localhost:3030/api/users/register', requestOptions)
    const data = await res.json()
    console.log(data);
    if (data.message) {
      console.log("error");
    }
    else {
      setUser(userEmailRegister)
      localStorage.token = data.token
    }
  };
  return (
    <div id="login">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={register}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              className="inputLogin"
              value={userNameRegister}
              onChange={(e) => {
                setUserNameRegister(e.target.value);
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputLogin"
              value={userEmailRegister}
              onChange={(e) => {
                setUserEmailRegister(e.target.value);
              }}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              className="inputLogin"
              value={userPassRegister}
              onChange={(e) => {
                setUserPassRegister(e.target.value);
              }}
            />
            <button className="buttonLogin">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={login}>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputLogin"
              value={userEmail}
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              className="inputLogin"
              value={userPass}
              onChange={(e) => {
                setUserPass(e.target.value);
              }}
            />
            <button className="buttonLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
