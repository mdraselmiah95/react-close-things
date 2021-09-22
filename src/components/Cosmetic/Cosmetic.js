import React from "react";
import { addToDb } from "../utilities/fakedb";
// import "./Cosmetic.css";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  //   console.log(props.cosmetic);
  const { name, about, address, age, balace, company, _id } = props.cosmetic;
  const handlePurchase = (id) => {
    //set to local storage
    //   console.log(id);
    addToDb(id);
  };

  //   const withParameter = (id) => handlePurchase(id);

  return (
    <div className="Cosmetic">
      <h2>Name:{name}</h2>
      <p>_id: {_id}</p>
      <h4>Age: {age}</h4>
      <h5>Balance: {balace}</h5>
      <p>{about.slice(0, 150)}</p>
      <h5>{address}</h5>
      <h5>{company}</h5>
      <button onClick={() => handlePurchase(_id)}>Purchase</button>
    </div>
  );
};

export default Cosmetic;
