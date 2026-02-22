import React, { useEffect, useState } from "react";

function Course() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  const handleJoin = async (courseId) => {
    const userId = localStorage.getItem("userId");

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
    <div>
      <h1>Available Courses</h1>

      {courses.map((course) => (
        <div key={course._id}>
          <h3>{course.title}</h3>
          <p>{course.description}</p>
          <p>Instructor: {course.instructor}</p>

          <button onClick={() => handleJoin(course._id)}>
            Join
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Course;