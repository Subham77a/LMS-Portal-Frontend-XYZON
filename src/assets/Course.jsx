import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Course() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  const handleJoin = async (courseId) => {
    const userId = localStorage.getItem("userId");

    // 🚨 If not logged in
    if (!userId) {
      alert("User not found. Please login first.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/join-course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, courseId })
      });

      const data = await response.json();
      alert(data.message);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="course-container">
        <h1 className="course-title">Available Courses</h1>

        <div className="course-grid">
          {courses.map((course) => (
            <div key={course._id} className="course-card">

              {/* Future Image Support */}
              {course.image && (
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-image"
                />
              )}

              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="description">{course.description}</p>
                <p className="instructor">
                  Instructor: <span>{course.instructor}</span>
                </p>

                <button
                  className="join-btn"
                  onClick={() => handleJoin(course._id)}
                >
                  Join Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .course-container {
          min-height: 100vh;
          padding: 60px 40px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }

        .course-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 32px;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .course-card {
          background: #1e293b;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .course-card:hover {
          transform: translateY(-8px);
        }

        .course-image {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .course-content {
          padding: 20px;
        }

        .course-content h3 {
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

        .join-btn {
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

        .join-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 18px rgba(56, 189, 248, 0.4);
        }
      `}</style>
    </>
  );
}

export default Course;