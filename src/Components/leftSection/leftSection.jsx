import React, { useState, useEffect } from "react";
import "./leftSection.css";

export default function LeftSection({ categoryName, setCategoryName }) {
  const [list, setList] = useState([]);

  useEffect(() => {
  
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
         setList(res);
      });
  }, []);

  return (
    <div className="leftSection">
      <h2 className="categoryHeading">Categories</h2>
      <hr />
      <ul className="list">
        <li className="fiterItems">
          <input
            type="radio"
            value="all"
            name="category"
            onChange={() => setCategoryName("")}
            checked={categoryName === ""}
          />
          <label>ALL</label>
        </li>
        {list.map((it, idx) => (
          <li key={idx} className="fiterItems">
            <input
              type="radio"
              value={it}
              id={it}
              name="category"
              onChange={() => setCategoryName(it)}
            />
            <label htmlFor={it} className="content">
              {it}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
