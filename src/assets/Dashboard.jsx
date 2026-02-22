import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
//  console.log("Saved userId:", localStorage.getItem("userId"));
  const handleLogout = () => {
    localStorage.removeItem("userId");  // later replace with token
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <button onClick={() => navigate("/course")}>
          Courses
        </button>
      </div>

      <div>
        <button onClick={() => navigate("/mycourse")}>
          My Course
        </button>
      </div>

      <div>
        <button onClick={() => navigate("/notifications")}>
          Notifications
        </button>
      </div>

      <div>
        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
