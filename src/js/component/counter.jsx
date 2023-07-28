import React, { useEffect, useState } from "react";
import "../../styles/counter.css"

export const Countup = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count == 0) {
      setInterval(() => {
        setCount((i) => i + 1);
      }, 1000);
    }
  });

  return (
    <div className="container mt-2 align-items-end text-center">
      <i class="fa-solid fa-stopwatch fa-2xl mt-4 pe-1"></i>
      <span className="cards p-3 border rounded">
        {Math.floor(count / 10000) % 10}
        </span>
        <span className="cards p-3 border rounded">
        {Math.floor(count / 10000) % 10}
        </span>
        <span className="cards p-3 border rounded">
        {Math.floor(count / 1000) % 10}
        </span>
        <span className="p-3 border rounded">
        {Math.floor(count / 100) % 10}
        </span>
        <span className="p-3 border rounded">
          {Math.floor(count / 10) % 10}
        </span>
        <span className="p-3 border rounded">
          {count % 10}
        </span>
    </div>
  );
};
