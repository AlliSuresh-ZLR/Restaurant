import React, { useState } from "react";
import data from "./Data.json";

function Searchfilter() {
  const [search, setsearch] = useState("");
  return (
    <div>
      <center>
        <input
          style={{ position: "fixed" }}
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <br />

        {data
          .filter((item) =>
            item.country.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <h3 key={index} style={{ fontStyle: "italic" }}>
              {item.country}
            </h3>
          ))}
      </center>
    </div>
  );
}

export default Searchfilter;
