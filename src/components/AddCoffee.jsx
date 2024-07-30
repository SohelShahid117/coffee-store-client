import React from "react";
import Swal from "sweetalert2";
// import { json } from "react-router-dom";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    console.log("add coffee is working");
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const addCoffee = {
      coffeeName,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(addCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addCoffee),
      // body: json.stringify({ addCoffee }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congratulations!",
            text: "Coffee inserted successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="bg-slate-100">
      <h2 className="text-3xl">Add a coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* coffee name & qty row */}
        <div className="flex gap-5">
          <div className="md:w-1/2  form-control">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="coffeeName"
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
              placeholder="Type Coffee Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* <button className="btn btn-block">block</button> */}
        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block bg-blue-400"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
