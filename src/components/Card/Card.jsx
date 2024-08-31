import React from "react";

function Card({ item }) {
  const images = item.data.cardimages;
  const randomIndex = Math.floor(Math.random() * images.length);

  return (
    <a href="#">
      <div className="card">
        <span className="episodes">{item.data.episodes}</span>

        <figure>
          <img src={images[randomIndex]} alt="card image" />
        </figure>

        <span className="title">{item.data.title}</span>
      </div>
    </a>
  );
}

export default Card;
