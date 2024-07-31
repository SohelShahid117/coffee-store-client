import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

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
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    console.log("update coffee is working");
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateCoffee),
      // body: json.stringify({ addCoffee }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Congratulations!",
            text: "Coffee Updated successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-slate-100">
      <h2 className="text-3xl">Update a coffee:{coffeeName}</h2>
      <form onSubmit={handleUpdateCoffee}>
        {/* coffee name & qty row */}
        <div className="flex gap-5">
          <div className="md:w-1/2  form-control">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="coffeeName"
              defaultValue={coffeeName}
              placeholder="Type Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* coffee Supplier & taste */}
        <div className="flex gap-5">
          <div className="md:w-1/2  form-control">
            <div className="label">
              <span className="label-text">Coffee Supplier</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Type Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Category & Details */}
        <div className="flex gap-5">
          <div className="md:w-1/2  form-control">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Type Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="md:w-1/2">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Photo url */}
        <div className="flex gap-5">
          <div className="md:w-full  form-control">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Type Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* <button className="btn btn-block">block</button> */}
        <input
          type="submit"
          value="Update Coffee"
          className="btn btn-block bg-blue-400"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
