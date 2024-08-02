import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);

  const [users, setUsers] = useState(loadedUsers);

  const handleDelete = (id) => {
    console.log("handle delete is working");
    console.log("delete", id);

    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("deleted successfully id", id);
          const remainingUsers = users.filter((u) => u._id != id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h2>All users in here:{users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((u) => (
              <tr key={u._id}>
                <th>1</th>
                <td>{u.email}</td>
                <td>{u.userCreateAt}</td>
                <td></td>
                <td>
                  <button
                    className="btn bg-orange-700"
                    onClick={() => handleDelete(u._id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
