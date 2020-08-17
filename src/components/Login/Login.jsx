import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      // then when we got the result back
      .then((result) => {
        console.log(result);
      })
      //if we have an error
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <img
            src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
            alt=""
          />
          <h1>Sign In to </h1>
          <h2>Naicul Slack Clone</h2>
          <p>https://lucian.iernye.co.uk</p>
          <Button onClick={signIn}>Sign In With Google</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
