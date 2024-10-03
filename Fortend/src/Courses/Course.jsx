import React from "react";
import Navbar from "../companent/Navbar";
import Courses from "../companent/Courses";
import Footer from "../companent/Footer";
import list from "../../public/list.json"
console.log(list)
function Course() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Courses />
      </div>
      <Footer />
    </>
  );
}

export default Course;
