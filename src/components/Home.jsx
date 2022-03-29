import React from "react";
import SchoolBanner from "../image/banner/school-crumb.jpg";
import Header from "./header";
import Card from "./school-card";
import Footer from "./footer";
import Cardsbg from "../image/banner/University-of-Alberta.jpg";
import cardlogo from "../image/banner/logo.png";

export default function Home() {
  return (
    <div>
      <Header heading="Home" school={SchoolBanner} flink="Home" />
      <div className="cards">
        <Card cardbg={Cardsbg} logo={cardlogo} />
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
