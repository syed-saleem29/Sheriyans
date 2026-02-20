import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

const App = () => {
  // const getData = async ()=>{
  //   const response = await axios.get('http://localhost:8000/data')
  //   console.log(response)
  // }

  const [Theme, setTheme] = useState("Light");

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      Changing data of app.jsx(parent) from the navbar.jsx(clild)


      <Navbar Theme={Theme} changeTheme={changeTheme} />
    </div>
  );
};

export default App;
