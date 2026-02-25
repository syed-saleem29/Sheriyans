import React from "react";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="top">
        <button>About Horizon</button>
        <p>
          At Horizon, we don't just play tennis-we live it. Since 2021, <br />
          our club has been a home for players of all levels, from eager <br />
          beginners to seasoned pros
        </p>
      </div>
      <div className="middle">
        <div className="box1 box">
          <div className="icon"></div>
          <h3>
            Professional hard courts <br />{" "}
            <span>
              with tournament-grade <br /> lighting & climate control -- <br />{" "}
              play in{" "}
            </span>{" "}
            perfect conditions, <br /> in any season.
          </h3>
          <button>Game Mode : On</button>
        </div>
        <div className="box2 box">
          <button>Private & Group Lessons</button>
        </div>
        <div className="box3 box">
          <h2>100+</h2>
          <h4>Pro Coaches</h4>
          <p>
            Certified Professionals ready to boost your game from first serve to
            tournament level
          </p>
          <div className="separator">
            <h5>Beginner - </h5>
            <span>55</span>
            </div>
          <div className="separator">
            <h5>Intermediate - </h5>
            <span>40</span>
            </div>
          <div className="separator">
            <h5>Advanced - </h5>
            <span>35</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h3>A few more facts aout us in numbers</h3>
        <div className="stats">
          <div className="single-stat">
            <h2>12000+</h2>
            <p>Hours of play anuualy</p>
          </div>
          <div className="single-stat">
            <h2>89%</h2>
            <p>Player Retention Rate</p>
          </div>
          <div className="single-stat">
            <h2>1,200+</h2>
            <p>Active Members</p>
          </div>
          <div className="single-stat">
            <h2>125+</h2>
            <p>Annual Tournaments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
