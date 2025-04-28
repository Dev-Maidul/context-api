import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
  const navigate= useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password);
        // set login user
        signInUser(email,password)
        .then(result=>{
            console.log(result);
            navigate('/');
           })
           .then(error=>{
            console.log(error);
           })
    }
  return (
    <div className="card bg-base-100 mx-auto py-8 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}
        className="fieldset">
          <label className="label">Email</label>
          <input
            name="email"
            type="email"
            className="input"
            placeholder="Email"
          />

          <label className="label">Password</label>
          <input
            name="password"
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            LogIn
          </button>
        </form>
        <p>
          New this site? Please
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
