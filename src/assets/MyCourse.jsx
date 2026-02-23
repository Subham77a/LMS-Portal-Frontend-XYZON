import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyCourse() {
  const [myCourses, setMyCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:3000/api/users/${userId}/my-courses`)
      .then(res => res.json())
      .then(data => {
        setMyCourses(data);
      })
      .catch(err => console.error(err));

  }, [navigate]);

  return (
    <>
      <div className="mycourse-container">
        <h1 className="mycourse-title">My Joined Courses</h1>

        {myCourses.length === 0 ? (
          <div className="empty-state">
            <h2>No Courses Joined Yet</h2>
            <p>Start exploring courses and enhance your skills today.</p>
            <button onClick={() => navigate("/course")}>
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="mycourse-grid">
            {myCourses.map((course) => (
              <div key={course._id} className="mycourse-card">

                {course.image && (
                  <img
                    src={`http://localhost:3000/uploads/${course.image}`}
                    alt={course.title}
                    className="course-image"
                  />
                )}

                <div className="card-content">
                  <h3>{course.title}</h3>
                  <p className="description">{course.description}</p>
                  <p className="instructor">
                    Instructor: <span>{course.instructor}</span>
                  </p>

                  <button className="continue-btn">
                    Continue Learning
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .mycourse-container {
          min-height: 100vh;
          padding: 60px 40px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }

        .mycourse-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 32px;
        }

        /* Grid Layout */
        .mycourse-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        /* Card */
        .mycourse-card {
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .mycourse-card:hover {
          transform: translateY(-8px);
        }

        .course-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-content {
          padding: 20px;
        }

        .card-content h3 {
          margin-bottom: 10px;
          color: #38bdf8;
        }

        .description {
          font-size: 14px;
          margin-bottom: 12px;
          color: #cbd5e1;
        }

        .instructor {
          font-size: 13px;
          margin-bottom: 15px;
        }

        .instructor span {
          color: #38bdf8;
        }

        .continue-btn {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 6px;
          background: #38bdf8;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .continue-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          margin-top: 100px;
        }

        .empty-state h2 {
          margin-bottom: 10px;
        }

        .empty-state p {
          margin-bottom: 20px;
          color: #cbd5e1;
        }

        .empty-state button {
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          background: #38bdf8;
          color: black;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .empty-state button:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
        }
      `}</style>
    </>
  );
}

export default MyCourse;