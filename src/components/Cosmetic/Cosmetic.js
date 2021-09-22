import React from "react";
// import "./Cosmetic.css";
import "./Cosmetic.css";
const Cosmetic = (props) => {
  //   console.log(props.cosmetic);
  const { name, about, address, age, balace, company } = props.cosmetic;

  return (
    <div className="Cosmetic">
      <h2>Name:{name}</h2>
      <h4>Age: {age}</h4>
      <h5>Balance: {balace}</h5>
      <p>{about}</p>
      <h5>{address}</h5>
      <h5>{company}</h5>
    </div>
  );
};

export default Cosmetic;
