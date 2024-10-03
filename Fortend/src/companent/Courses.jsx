import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom"
function Courses() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="2xl  md:text-4xl ">
            We're Welcome in My Shose Hosuse{" "}
            <span className="text-pink-500">Here :) </span>
          </h1>
          <p className="mt-12">
            A bookstore is a haven for book lovers, offering a wide range of
            literature, from fiction and non-fiction to educational and
            reference materials.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;
