import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [allUsers, setAllUsers] = useState(() => {
    const data = localStorage.getItem("AllUsers");
    return data ? JSON.parse(data) : [];
  });

  2;
  const submitHandler = (e) => {
    e.preventDefault();

    const updatedUser = [...allUsers, { name, imgUrl, role, description }];
    setAllUsers(updatedUser);
    localStorage.setItem("AllUsers", JSON.stringify(updatedUser));

    setDescription("");
    setImgUrl("");
    setName("");
    setRole("");
  };

  const deleteHandler = (idx) => {
    const copyUsers = [...allUsers];

    const conf = confirm("Do You really want to delete ?");

    if (conf) copyUsers.splice(idx, 1);

    setAllUsers(copyUsers);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap p-2 justify-center"
      >
        <input
          className="border-2 text-2xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="border-2 text-2xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image Url"
          value={imgUrl}
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <input
          className="border-2 text-2xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          className="border-2 text-2xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button className="border-2 text-2xl active:scale-95 font-semibold px-5 py-2 bg-emerald-500 rounded m-2 w-[80%]">
          Create user
        </button>
      </form>

      <div className="px-4 py-10 gap-4 flex flex-wrap">
        {allUsers.map(function (elem, idx) {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
