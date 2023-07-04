import React, { useEffect, useState } from "react";

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
    <div className="card">
      <h1>{count}</h1>
    </div>
  );
};
