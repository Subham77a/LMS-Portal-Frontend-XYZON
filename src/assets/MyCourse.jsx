import { useEffect, useState } from "react";

function MyCourse() {

  const [myCourses, setMyCourses] = useState([]);

  useEffect(() => {

    const userId = localStorage.getItem("userId");

    fetch(`http://localhost:3000/api/my-courses/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("My Courses:", data);
        setMyCourses(data);
      })
      .catch(err => console.error(err));

  }, []);

  return (
    <div>
      <h1>My Joined Courses</h1>

      {myCourses.length === 0 ? (
        <p>No courses joined yet</p>
      ) : (
        myCourses.map((course) => (
          <div key={course._id}>
            <h3>{course.title}</h3>

            {course.image && (
              <img
                src={`http://localhost:3000/uploads/${course.image}`}
                alt={course.title}
                width="200"
              />
            )}

            <p>{course.description}</p>
            <p>Instructor: {course.instructor}</p>

            <hr />
          </div>
        ))
      )}

    </div>
  );
}

export default MyCourse;