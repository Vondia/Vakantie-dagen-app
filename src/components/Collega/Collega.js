import React from "react";
import "./Collega.scss";

export default function Colleague(props) {
  const onClickDecrement = () => {
    props.decrementDays(props.id);
  };

  const onClickIncrement = () => {
    props.incrementDays(props.id);
  };

  return (
    <li className="Colleague">
      <div
        className="percentage_coloring"
        style={{ width: props.days + "%" }}
      ></div>
      <p>
        {props.name} (dagen: {props.days})
      </p>
      <p style={{ position: "absolute", top: "0", right: "0", bottom: "0" }}>
        <button onClick={onClickDecrement}>-1 dag</button>
      </p>
      <p
        style={{
          position: "absolute",
          top: "0",
          right: "60px",
          bottom: "0",
        }}
      >
        <button onClick={onClickIncrement}>+1 dag</button>
      </p>
    </li>
  );
}
