import React from "react";
import Home from "./home/Home";

import { Route, Routes } from "react-router-dom";
import Course from "./Courses/Course";
import Signup from "./companent/Signup";
import { useAuth } from "./companent/context/AuthProvider";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
