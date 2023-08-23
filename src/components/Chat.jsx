/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  const scroll = useRef();
  return (
    <>
      <div className="flex flex-col p-[10px] relative">
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </div>
      <SendMessage scroll={scroll} />;<span ref={scroll}></span>
    </>
  );
};

export default Chat;
