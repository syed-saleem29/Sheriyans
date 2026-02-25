import React from "react";
import Contact from "./components/Contact-card";
import { useState } from "react";
import { useReducer } from "react";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  function onSubmitHandler(e) {
    e.preventDefault();
    // console.log(e);

    setAllUsers([...allUsers, { userName, userEmail }]);

    console.log(allUsers);

    setUserName("");
    setUserEmail("");
  }

  return (
    <div className="main">
      <div className="userInput">
        <form
          onSubmit={(e) => {
            onSubmitHandler(e);
          }}
        >
          <div className="container">
            <input
              className="nameInput"
              type="text"
              placeholder="Enter Name"
              value={userName}
              required
              autoComplete="off"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              className="emailInput"
              type="email"
              placeholder="Enter Email"
              value={userEmail}
              required
              autoComplete="off"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div className="all-cards">
        {allUsers.map((elem,idx)=>{
          return <Contact key={idx} data={elem} />
      })}
      </div>
    </div>
  );
};

export default App;
