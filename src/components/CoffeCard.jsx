import React from "react";

const CoffeCard = ({ coffee }) => {
  console.log(coffee);
  const { coffeeName, quantity, supplier, taste, category, details, photo } =
    coffee;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl m-5">
        <figure>
          <img src={photo} alt="Movie" className="w-auto h-20" />
        </figure>
        <div className="flex justify-between w-full">
          <div>
            <h2 className="card-title">Name:{coffeeName}</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <p>Qty:{quantity}</p>
            <p>Supplier:{supplier}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical">
              <button className="btn join-item mb-2">View</button>
              <button className="btn join-item mb-2">Edit</button>
              <button className="btn join-item mb-2">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
