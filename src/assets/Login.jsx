import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

  return (
    <>
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Sign in to continue to your LMS dashboard
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>
          </form>

          <p className="register-text">
            Don’t have an account?
            <Link to="/Createac" className="register-link">
              Create one
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        .login-container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: 'Segoe UI', sans-serif;
        }

        .login-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          padding: 40px;
          width: 380px;
          border-radius: 12px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
          text-align: center;
          color: white;
        }

        .login-title {
          margin-bottom: 10px;
          font-size: 28px;
        }

        .login-subtitle {
          font-size: 14px;
          margin-bottom: 30px;
          color: #cbd5e1;
        }

        .input-group {
          text-align: left;
          margin-bottom: 20px;
        }

        .input-group label {
          font-size: 14px;
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

        .login-btn {
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

        .login-btn:hover {
          transform: scale(1.03);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
        }

        .register-text {
          margin-top: 20px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .register-link {
          margin-left: 6px;
          color: #38bdf8;
          text-decoration: none;
          font-weight: 500;
        }

        .register-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

export default Login;