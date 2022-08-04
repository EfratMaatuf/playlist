import "./Login.css";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [userEmail, setUserEmail] = useState();
  const [userPass, setUserPass] = useState();

  const [userNameRegister, setUserNameRegister] = useState();
  const [userEmailRegister, setUserEmailRegister] = useState();
  const [userPassRegister, setUserPassRegister] = useState();

  const [errorEnterDetailsLogin, setErrorEnterDetailsLogin] = useState(false);
  const [errorEnterDetailsRegister, setErrorEnterDetailsRegister] =
    useState(false);

  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };
      const res = await fetch(
        `/api/users/checkToken`,
        // `http://localhost:3030/api/users/checkToken`,
        requestOptions
      );
      const data = await res.json();
      if (data.id) {
        setUser(data);
      }
    };
    if (localStorage.token) {
      fetchData();
    }
  }, []);

  const login = async (e) => {
    console.log("login");
    e.preventDefault();
    if (!userEmail || !userPass) {
      setErrorMessage("Please enter name, email or password");
      setErrorEnterDetailsLogin(true);
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: userPass }),
    };
    const res = await fetch(
      // "https://my-playlist-efrat-michal.herokuapp.com/api/users/login",
      "/api/users/login",
      requestOptions
    );
    const data = await res.json();
    console.log("🚀 ~ file: Login.js ~ line 57 ~ login ~ data", data);
    if (data.token) {
      localStorage.token = data.token;
      setUser({
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
      });
    } else {
      console.log("Email or password not ...");
      setErrorMessage("Email or password not ...");
      setErrorEnterDetailsLogin(true);
    }
    return data;
  };
  const register = async (e) => {
    e.preventDefault();
    console.log("register");
    if (!userNameRegister || !userEmailRegister || !userPassRegister) {
      setErrorMessage("Please enter name, email or password");
      setErrorEnterDetailsRegister(true);
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmailRegister,
        password: userPassRegister,
        name: userNameRegister,
      }),
    };
    const res = await fetch("/api/users/register", requestOptions);
    const data = await res.json();
    console.log(data);
    if (data.message) {
      console.log("error");
      setErrorMessage(data.message);
      setErrorEnterDetailsRegister(true);
    } else {
      setUser({
        id: data.user._id,
        email: data.user.email,
        name: data.user.name,
      });
      localStorage.token = data.token;
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
            {errorEnterDetailsRegister && (
              <div className="errorEnterDetails">{errorMessage}</div>
            )}
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
            {errorEnterDetailsLogin && (
              <div className="errorEnterDetails">{errorMessage} </div>
            )}
            <button className="buttonLogin">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
