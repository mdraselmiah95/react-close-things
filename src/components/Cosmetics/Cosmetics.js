import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";

const Cosmetics = () => {
  const [cosmetics, setCosmetics] = useState([]);
  useEffect(() => {
    fetch("./cosmetics.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  return (
    <div>
      <h3>This is Data.</h3>
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic._id} cosmetic={cosmetic} />
      ))}
    </div>
  );
};

export default Cosmetics;
