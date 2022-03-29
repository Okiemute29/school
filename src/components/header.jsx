import React from "react";

export default function Header(props) {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${props.school})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <div className="header-writeup">
        <h1>{props.heading}</h1>
        <p>
          <a href="#">{props.flink}</a>.<a href="#">{props.nxtlink}</a>
        </p>
      </div>
    </div>
  );
}
