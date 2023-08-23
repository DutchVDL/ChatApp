/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { auth } from "../firebase";

// "flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full"

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`
      : `bg-[#e5e5ea] text-blac float-left rounded-br-full`;

  return (
    <div>
      <div
        className={`flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full ${messageClass}`}
      >
        <p className=" mt-[4rem] text-gray-600 text-xs absolute">
          {message.name}
        </p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
