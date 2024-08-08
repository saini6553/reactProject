import React, { useState } from "react";
// import { mainDiv } from "./functionBased.scss";

const FunctioBaseDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={"mainDiv"}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default FunctioBaseDemo;
