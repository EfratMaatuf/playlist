import "./Login.css";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
const userDb = { email: "efrat5454@gmail.com", pass: "123" };

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();
  const checkUser = (e) => {
    e.preventDefault();
    console.log(userEmail);
    console.log(userPass);
    if (userEmail === userDb.email && userPass === userDb.pass) {
      setUser(userDb);
    }
  };
  return (
    <div id="login">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="txt"
              placeholder="User name"
              className="inputLogin"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="inputLogin"
            />
            <input
              type="password"
              name="pswd"
              placeholder="Password"
              className="inputLogin"
            />
            <button className="buttonLogin">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form onSubmit={checkUser}>
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
