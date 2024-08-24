import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

export default function CreateCustomer() {
  const [fullName, setFullName] = useState();
  const [nationalID, setNationalId] = useState();
  const disPatch = useDispatch();
  function handelClick() {
    if (!fullName || !nationalID) return;
    disPatch(createCustomer(fullName, nationalID));
  }
  return (
    <div>
      <h2> create new customer </h2>
      <div className="inputs">
        <div>
          {" "}
          <label> customer full name </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          {" "}
          <label> nationalD </label>
          <input
            type="text"
            value={nationalID}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handelClick}> create new customer </button>
    </div>
  );
}
