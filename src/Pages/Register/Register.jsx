import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
    // Destructure Here 
    const {createUser}=use(AuthContext);
    
    const handleRegister=(e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password);
        // create user using Context API
       createUser(email,password)
       .then(result=>{
        console.log(result);
       })
       .then(error=>{
        console.log(error);
       })
    }
  return (
    <div className="card bg-base-100 mx-auto py-8 w-full max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Register now!</h1>
      <div className="card-body">

        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />

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
         
          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </form>
        <p>
          Already have an Account Please
          <Link className="text-blue-500 underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
