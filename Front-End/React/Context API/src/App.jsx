import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {

  return (
    <div className="bg-[#242424] min-h-screen text-white">
      <Navbar/>
      <Sections>
        <h2>This is Section Child</h2>
        <h3>This is Section 2nd Child</h3>
      </Sections>
      <Footer/>
    </div>
  )





















  // const getData = async ()=>{
  //   const response = await axios.get('http://localhost:8000/data')
  //   console.log(response)
  // }

  // const [Theme, setTheme] = useState("Light");

  // const changeTheme = (newTheme) => {
  //   setTheme(newTheme);
  // };

  // return (
  //   <div>
  //     Changing data of app.jsx(parent) from the navbar.jsx(clild)


  //     <Navbar Theme={Theme} changeTheme={changeTheme} />
  //   </div>
  // );

};

export default App;
