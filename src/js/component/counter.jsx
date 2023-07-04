import React, { useEffect, useState } from "react";

export const Countup = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count == 0) {
      setInterval(() => {
        setCount((i) => i + 1);
      }, 2000);
    }
  });

  return (
    <div className="container align-items-end text-end">
      <div className="width-40 border border-primary ">
        <h4>{count}</h4>
      </div>
    </div>
  );
};
