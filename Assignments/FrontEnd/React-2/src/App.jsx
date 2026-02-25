import React from "react";
import Card from "./components/Card";

const App = () => {
  const avengers = [
    {
      id: 1,
      coverImage: "/Images/ironman-cover.jpg",
      profileImage: "/Images/ironman.jpg",
      name: "Iron Man",
      description:
        "Genius billionaire Tony Stark who built advanced armored suits to protect Earth.",
      likeCount: "125K",
      postCount: 320,
      viewsCount: "158K",
    },
    {
      id: 2,
      coverImage: "/Images/ca-cover.jpg",
      profileImage: "/Images/ca.jpg",
      name: "Captain America",
      description:
        "Steve Rogers, enhanced super soldier and true leader of the Avengers.",
      likeCount: "110K",
      postCount: 280,
      viewsCount: "142K",
    },
    {
      id: 3,
      coverImage: "/Images/thor-cover.jpg",
      profileImage: "/Images/thor.jpg",
      name: "Thor",
      description:
        "The mighty God of Thunder from Asgard wielding the enchanted hammer Mjolnir.",
      likeCount: "980K",
      postCount: 260,
      viewsCount: "131K",
    },
    {
      id: 4,
      coverImage: "/Images/hulk-cover.jpg",
      profileImage: "/Images/hulk.jpg",
      name: "Hulk",
      description:
        "Dr. Bruce Banner transforms into the unstoppable green powerhouse, Hulk.",
      likeCount: "890K",
      postCount: 210,
      viewsCount: "120K",
    },
    {
      id: 5,
      coverImage: "/Images/widow-cover.jpg",
      profileImage: "/Images/widow.jpg",
      name: "Black Widow",
      description:
        "Natasha Romanoff, elite spy, assassin, and founding Avenger.",
      likeCount: "870K",
      postCount: 195,
      viewsCount: "108K",
    }
  ];

  return (
    <div className="min-h-screen p-3 bg-black text-white flex gap-1.5 flex-wrap justify-center">
      {avengers.map(function (elem, index) {
        return (
          <Card
            key={index}
            cover={elem.coverImage}
            profile={elem.profileImage}
            name={elem.name}
            description={elem.description}
            likes={elem.likeCount}
            posts={elem.postCount}
            views={elem.viewsCount}
          />
        );
      })}
    </div>
  );
};

export default App;
