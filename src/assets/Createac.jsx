import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Createac() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Account Created Successfully");
        navigate("/login");
      } else {
        alert(data.message || "Error creating account");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <>
      <div className="register-container">
        <div className="register-card">
          <h1 className="register-title">Create Your Account</h1>
          <p className="register-subtitle">
            Join LMS Portal and start your learning journey today.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Choose a username"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Create a password"
              />
            </div>

            <button type="submit" className="register-btn">
              Create Account
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .register-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: 'Segoe UI', sans-serif;
        }

        .register-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px;
          width: 420px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          text-align: center;
          color: white;
        }

        .register-title {
          font-size: 26px;
          margin-bottom: 10px;
        }

        .register-subtitle {
          font-size: 14px;
          margin-bottom: 25px;
          color: #cbd5e1;
        }

        .input-group {
          text-align: left;
          margin-bottom: 18px;
        }

        .input-group label {
          font-size: 13px;
          margin-bottom: 6px;
          display: block;
          color: #cbd5e1;
        }

        .input-group input {
          width: 100%;
          padding: 10px;
          border-radius: 6px;
          border: none;
          outline: none;
          background: #1e293b;
          color: white;
          font-size: 14px;
        }

        .input-group input:focus {
          border: 1px solid #38bdf8;
        }

        .register-btn {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          border: none;
          border-radius: 6px;
          background: #38bdf8;
          color: black;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .register-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
        }
      `}</style>
    </>
  );
}

export default Createac;