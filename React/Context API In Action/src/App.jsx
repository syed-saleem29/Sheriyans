import React, { useContext, useState } from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import ThemeContext, { ThemeData } from "./context/ThemeContext";


const App = () => {
  const [userInput, setuserInput] = useState("");

  const [data,setTheme] = useContext(ThemeData);
  
  const changeUserData = () => {
    // console.log(data)
    setTheme(userInput)
  };

  return (
    <div>
      <Navbar />
      <Section />
      <Footer />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          changeUserData(e);
          setuserInput("");
        }}
      >
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setuserInput(e.target.value);
          }}
        />
        <button>Change</button>
      </form>
    </div>
  );
};

export default App;
