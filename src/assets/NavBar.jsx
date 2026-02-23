import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Left - Logo */}
        <div className="navbar-logo">
          <Link to="/" className="logo-text">
            LMS Portal
          </Link>
        </div>

        {/* Middle - Links */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/course" className="nav-link">Courses</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>

        {/* Right - Auth */}
        <div className="navbar-auth">
          <Link to="/login" className="btn login-btn">Login</Link>
          <Link to="/createac" className="btn register-btn">
            Create Account
          </Link>
        </div>
      </nav>

      {/* Styles in same file */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 60px;
          background-color: #0f172a;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .logo-text {
          font-size: 22px;
          font-weight: bold;
          text-decoration: none;
          color: #38bdf8;
        }

        .navbar-links {
          display: flex;
          gap: 30px;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-size: 16px;
          transition: 0.3s ease;
        }

        .nav-link:hover {
          color: #38bdf8;
        }

        .navbar-auth {
          display: flex;
          gap: 15px;
        }

        .btn {
          padding: 8px 18px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          transition: 0.3s ease;
        }

        .login-btn {
          background-color: transparent;
          border: 1px solid #38bdf8;
          color: #38bdf8;
        }

        .login-btn:hover {
          background-color: #38bdf8;
          color: black;
        }

        .register-btn {
          background-color: #38bdf8;
          color: black;
          font-weight: 500;
        }

        .register-btn:hover {
          opacity: 0.85;
        }
      `}</style>
    </>
  );
};

export default Navbar;