import React, { useState } from "react";

const Navbar = (props) => {
  const [newTheme, setNewTheme] = useState("");

  return (
    <div>
      <h2>This is {props.Theme} </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          props.changeTheme(newTheme);

          setNewTheme("");
        }}
      >
        <input
          type="text"
          value={newTheme}
          onChange={(e) => {
            setNewTheme(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Navbar;
