import React from "react";
import list from "../../public/list.json"

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">${item.Price}</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
