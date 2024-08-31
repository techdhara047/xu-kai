import React, { useState } from "react";

function Search({ data }) {
  console.log("search component");
  const [input, setInput] = useState("");

  console.log(data);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      {data
        .filter((item) => {
          if (
            item.data.title.toLowerCase().includes(input.trim().toLowerCase())
          ) {
            return true;
          } else {
            return false;
          }
          return true;
        })
        .map((item) => (
          <p>{item.data.title}</p>
        ))}
    </div>
  );
}

export default Search;
