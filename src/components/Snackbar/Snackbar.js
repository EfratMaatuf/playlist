import React, { useState } from "react";
import "./Snackbar.css";
const Snackbar = ({ message }) => {
  const [classSnackbar, setClassSnackbar] = useState("show");

  setTimeout(() => {
    setClassSnackbar("");
  }, 3000);
  return (
    <div id="snackbar" className={classSnackbar}>
      {message}
    </div>
  );
};

export default Snackbar;
