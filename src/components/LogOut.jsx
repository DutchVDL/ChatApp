/* eslint-disable no-unused-vars */
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button
      onClick={() => {
        auth.signOut();
      }}
      className="bg-gray-200 px-4 py-2 hover:bg-gray-100"
    >
      LogOut
    </button>
  );
};

export default LogOut;
