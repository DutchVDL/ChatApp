/* eslint-disable no-unused-vars */
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";

const SignIn = () => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="flex justify-center">
      <GoogleButton onClick={handleClick} />
    </div>
  );
};

export default SignIn;
