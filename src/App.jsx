/* eslint-disable no-unused-vars */
import { useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import Chat from "./components/Chat";

// const style = {
//   container: `max-w-[720px] mx-auto text-center`,
// };

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="max-w-[720px] mx-auto text-center ">
      <section className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative overflow-auto">
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
