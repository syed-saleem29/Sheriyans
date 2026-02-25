import React, { useState } from "react";

const App = () => {
  const [userName, setUserName] = useState("");

  const [allUsers, setAllUsers] = useState([])

  function submitHandler(e) {
    e.preventDefault();

    // console.log(userName)

    setAllUsers([...allUsers,userName])

    console.log(allUsers)
    
    setUserName("");
  }

  return (
    <div className="main">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          required
          type="text"
          placeholder="Enter Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>

      {allUsers.map((elem,idx)=>{
        return <h1 key = {idx}>{elem}</h1>
      })}
    </div>
  );
};

export default App;
