import React from "react";
import book from "../image/banner/open-book.png";
import cap from "../image/banner/loan1.png";

export default function Card(props) {
  return (
    <div className="Card">
      <div
        className="card-image"
        style={{
          backgroundImage: `url(${props.cardbg})`
        }}
      ></div>
      <div
        className="card-logo"
        style={{
          backgroundImage: `url(${props.logo})`
        }}
      ></div>
      <div className="card-writeup">
        <h1>University of Alberta</h1>
        <p id="location">Edmonton, canada</p>
        <p>
          <img src={book} alt="book icon" /> 57 Programs
        </p>
        <p>
          <img src={cap} alt="book icon" />
          107 Scholarships Available
        </p>
      </div>
    </div>
  );
}
