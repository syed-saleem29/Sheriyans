import React from "react";

const Card = (props) => {
    console.log(props)
  return (
    <div className=" rounded-xl bg-white w-90 relative text-black flex flex-col items-center p-3 h-fit">
      <div className="w-full ">
        <img
          src={props.cover}
          className="bg-cover rounded-2xl"
          alt=""
        />
      </div>
      <img
        src={props.profile}
        className="rounded-full h-30 w-30 object-cover border-4 bottom-54 left-30 border-white absolute"
        alt=""
      />
      <h1 className="mt-18 text-3xl font-semibold text-center mb-3 ">
        {props.name}
      </h1>
      <p className="text-center font-medium text-gray-600 w-80">
       {props.description}
      </p>
      <div className="flex justify-around w-83 bg-gray-100 rounded-xl py-5 mt-4 text-center border-gray-300 border">
        <div>
          <h3 className="font-semibold text-xl">{props.likes}</h3>
          <p className="text-sm font-medium text-gray-600">Likes</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">{props.posts}</h3>
          <p className="text-sm font-medium text-gray-600">Posts</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">{props.views}</h3>
          <p className="text-sm font-medium text-gray-600">Views</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
