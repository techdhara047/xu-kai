import React from "react";
import { Status } from "../../utils/constants";
import { slugify } from "../../utils/utils";

function Card({ item }) {
  const images = item.data.cardimages;
  const randomIndex = Math.floor(Math.random() * images.length);
  const href = slugify(item.data.title);

  return (
    <a href={`/filmography/${href}`}>
      <div className="card" key={item.id + 1}>
        {(item.data.status === 2 || item.data.status === 3) && (
          <span className="status">{Status[item.data.status]}</span>
        )}
        <span className="episodes">{item.data.episodes}</span>

        <figure>
          <img src={images[randomIndex]} alt="card image" />
        </figure>
        <div
          className="info"
          style={{ display: item.data.status === 1 ? "block" : "none" }}
        >
          Updated upto 6 out of {item.data.episodes}
        </div>
        <p
          className="title"
          style={{
            position: item.data.status === 1 ? "static" : "absolute",
          }}
        >
          <span
            style={{
              backgroundColor: item.data.status === 1 ? "inherit" : "",
            }}
          >
            {item.data.title}
          </span>
        </p>
      </div>
    </a>
  );
}

export default Card;
