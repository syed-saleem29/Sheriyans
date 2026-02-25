import React from "react";
import Mens from "./components/Mens";
import Womens from "./components/Womens";

const App = () => {
  const user1 = {
    user: "John",
    age: 15,
    gender: "male",
  };
  const user2 = {
    user: "Rita",
    age: 23,
    gender: "female",
  };
  const user3 = {
    user: "Mark",
    age: 32,
    gender: "male",
  };

  function btnClicked(){
    console.log("Button Clicked !!")
  }

  return (
    // Conditional Rendering
    <div className="bg-black min-h-screen p-3">
      {/* {user2.gender == "male" ? <Mens/> : <Womens/>} */}

      <button onClick={btnClicked} className="bg-emerald-400 text-white font-semibold w-fit px-5 py-3 text-xl rounded active:scale-95 cursor-pointer">
        Download Now
      </button>
    </div>
  );
};

export default App;
