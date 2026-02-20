import React, { useContext, useState } from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = (props) => {

    const data =  useContext(UserDataContext)

    return(
        <div className="h-10 w-full bg-emerald-600 text-2xl">
            <h1>This is Navbar {data}</h1>
        </div>
    )

































//   const [newTheme, setNewTheme] = useState("");

//   return (
//     <div>
//       <h2>This is {props.Theme} </h2>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();

//           props.changeTheme(newTheme);

//           setNewTheme("");
//         }}
//       >
//         <input
//           type="text"
//           value={newTheme}
//           onChange={(e) => {
//             setNewTheme(e.target.value);
//           }}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
};

export default Navbar;
