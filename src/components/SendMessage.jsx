/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("enter message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form
      className="h-14 w-full max-w-[728px]   flex text-xl  bottom-0"
      onSubmit={sendMessage}
    >
      <input
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none"
        type="text"
        name=""
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Message"
      />
      <button type="submit" className="w-[20%] bg-green-500 ">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
