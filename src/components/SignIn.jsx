import React, { useContext } from "react";
import { authContext } from "../Providers/AuthProviders";
// import { json } from "react-router-dom";

const SignIn = () => {
  const { signInUser } = useContext(authContext);
  console.log(signInUser);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("sign in is working");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(form, email, password);

    signInUser(email, password)
      .then((result) => {
        // console.log(result);
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const user = { email, lastSignInTime: lastSignInTime };
        console.log(user);

        fetch("http://localhost:5000/user", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          // body: json.stringify(user),
          body: JSON.stringify(user),
        })
          // .then((res) => res.json())
          .then((data) => console.log(data));
      })
      // .then((data) => console.log(data));
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSignIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
