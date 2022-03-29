import React from "react";
import SchoolBanner from "../image/banner/school-crumb.jpg";
import Header from "./header";
import Card from "./school-card";
import Footer from "./footer";

export default function School() {
  return (
    <div>
      <Header
        heading="School"
        school={SchoolBanner}
        flink="Home"
        nxtlink="School"
      />
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
