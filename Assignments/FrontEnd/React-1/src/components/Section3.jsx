import React from "react";

const Section3 = () => {
  return (
    <div className="section3">
      <div className="box1 box">
        <button className="btn1">Serives</button>
        <h3>
          Explore our full range of coaching, <br /> training, and tennis
          experience. From <br />
          first serve to match point -- we've <br />
          got the right program for you.
        </h3>
        <button className="btn2">
          Explore More <i class="ri-arrow-right-up-line"></i>
        </button>
      </div>
      <div className="box2 box">
        <button className="btn1">Private & Group Lessons</button>
        <div className="bottom">
          <p>
            Program designed for <br />
            all ages and abilities
          </p>
          <button className="btn2">
            <i class="ri-arrow-right-up-long-line"></i>
          </button>
        </div>
      </div>
      <div className="box3 box">
        <div className="top">
          <button className="btn1">Court Access</button>
          <p>Hourly Court Rental</p>
        </div>
        <div className="bottom">
          <p>
            Step into a space built for <br /> players -- to grow, compete,
            <br />
            and thrive.
          </p>
            <button><i class="ri-arrow-left-long-line"></i></button>
            <button><i class="ri-arrow-right-long-line"></i></button>
        </div>
      </div>
    </div>
  );
};

export default Section3;
