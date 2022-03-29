import React from "react";
import examsBanner from "../image/banner/exams-crumbs.jpg";
import Header from "./header";
import Card from "./school-card";
import Footer from "./footer";

export default function Exams() {
  return (
    <div>
      <Header
        heading="Exams"
        school={examsBanner}
        flink="Home"
        nxtlink="Exams"
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
