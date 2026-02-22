import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Login(){
   const[email,setEmail]=useState(""); 
   const[password,setPassword]=useState("");
   const navigate=useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json(); 
      // assuming backend sends plain "yes" or "no"

      if (data.message === "yes") {
        localStorage.setItem("userId", data.userId);
        navigate("/dashboard");
      } else {
        alert("Wrong username or password");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };
    return(
         <>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <br />

        <button type="submit">Sign In</button>
      </form>
      <Link to="/Createac">
      <button>Don't have account Create one</button>
      </Link>
    </>
  );
}

export default Login;