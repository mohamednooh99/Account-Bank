import React from "react";
import { useSelector } from "react-redux";

export default function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <div> Hello , {customer}</div>;
}
