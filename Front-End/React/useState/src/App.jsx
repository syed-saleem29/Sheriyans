import { useState } from "react";
import React from "react";

const App = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="bg-[#242424] min-h-screen p-5 text-white flex justify-center items-center flex-col">
      <h1 className="text-4xl p-5">{num}</h1>
      <div className="">
        <button
          onClick={() => {
            setNum(num+1);
          }}
          className="bg-emerald-600  px-5 py-2 rounded font-semibold text-2xl m-2 active:scale-95"
        >
          Increase
        </button>
        <button
          onClick={() => {
            setNum(num-1);
          }}
          className="bg-red-500  px-5 py-2 rounded font-semibold text-2xl m-2 active:scale-95"
        >
          Decrease
        </button> 
      </div>
    </div>
  );
};

export default App;
