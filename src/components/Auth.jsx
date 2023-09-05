import { signInWithPopup } from "firebase/auth";
import React from "react";
import Cookies from "universal-cookie";
import { auth, googleProvider } from "../firebase/config";
import "../styles/Auth.css";

const cookies = new Cookies();

const Auth = ({ setIsAuth }) => {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      cookies.set("auth-token", result?.user?.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
