import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeCard = ({ coffee }) => {
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
  const handleDelete = (id) => {
    console.log("delete", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
              <Link to={`/updateCoffee/${_id}`} className="btn join-item mb-2">
                Edit
              </Link>
              <button
                className="btn join-item mb-2 bg-orange-500"
                onClick={() => handleDelete(_id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeCard;
