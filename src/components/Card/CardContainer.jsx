import React from "react";
import Card from "./Card";

function CardContainer({ data, heading }) {
  return (
    <div className="cardContainer">
      <h4 className="heading">{heading}</h4>
      <div className="grid">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
