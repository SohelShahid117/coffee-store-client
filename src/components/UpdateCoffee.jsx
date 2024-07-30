import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
  const {
    _id,
    coffeeName,
    quantity,
    supplier,
    taste,
    category,
    details,
    photo,
  } = coffee;
  return (
    <div>
      <h2>Update a coffee:{coffeeName}</h2>
    </div>
  );
};

export default UpdateCoffee;
