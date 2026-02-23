import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  return (
    <>
      <div className="dashboard-container">

        {/* 🔹 Dashboard Navbar */}
        <nav className="dashboard-navbar">
          <div className="dashboard-logo">LMS Dashboard</div>

          <div className="dashboard-nav-links">
            <button onClick={() => navigate("/course")}>Courses</button>
            <button onClick={() => navigate("/mycourse")}>My Course</button>
            <button onClick={() => navigate("/notifications")}>Notifications</button>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </nav>

        {/* 🔹 Main Content */}
        <div className="dashboard-content">
          <h1>Welcome Back 👋</h1>
          <p>Manage your learning journey from here.</p>

          {/* Big MyCourse Button */}
          <button 
            className="big-mycourse-btn"
            onClick={() => navigate("/mycourse")}
          >
            Go to My Courses
          </button>

          <div className="dashboard-cards">
            <div className="dash-card">
              <h3>📚 Enrolled Courses</h3>
              <p>Track all the courses you have joined.</p>
            </div>

            <div className="dash-card">
              <h3>🔔 Notifications</h3>
              <p>Stay updated with latest announcements.</p>
            </div>

            <div className="dash-card">
              <h3>📈 Progress</h3>
              <p>Monitor your learning performance.</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .dashboard-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          font-family: 'Segoe UI', sans-serif;
        }

        /* Navbar */
        .dashboard-navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 40px;
          background: #0f172a;
          box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        }

        .dashboard-logo {
          font-size: 20px;
          font-weight: bold;
          color: #38bdf8;
        }

        .dashboard-nav-links button {
          margin-left: 15px;
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
          font-weight: 500;
          background: #1e293b;
          color: white;
          transition: 0.3s ease;
        }

        .dashboard-nav-links button:hover {
          background: #38bdf8;
          color: black;
        }

        .logout-btn {
          background: #ef4444 !important;
          color: white !important;
        }

        .logout-btn:hover {
          background: #dc2626 !important;
        }

        /* Main Content */
        .dashboard-content {
          padding: 60px 40px;
          text-align: center;
        }

        .dashboard-content h1 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .dashboard-content p {
          margin-bottom: 30px;
          color: #cbd5e1;
        }

        /* Big MyCourse Button */
        .big-mycourse-btn {
          padding: 18px 50px;
          font-size: 20px;
          border: none;
          border-radius: 10px;
          background: #38bdf8;
          color: black;
          font-weight: bold;
          cursor: pointer;
          margin-bottom: 50px;
          transition: 0.3s ease;
        }

        .big-mycourse-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(56, 189, 248, 0.4);
        }

        /* Cards */
        .dashboard-cards {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }

        .dash-card {
          background: #1e293b;
          padding: 30px;
          border-radius: 12px;
          width: 250px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.4);
          transition: transform 0.3s ease;
        }

        .dash-card:hover {
          transform: translateY(-8px);
        }

        .dash-card h3 {
          margin-bottom: 10px;
          color: #38bdf8;
        }

        .dash-card p {
          font-size: 14px;
          color: #cbd5e1;
        }
      `}</style>
    </>
  );
}

export default Dashboard;