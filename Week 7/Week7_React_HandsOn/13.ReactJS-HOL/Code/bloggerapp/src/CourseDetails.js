import React from 'react';

function CourseDetails({ courses }) {
  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '10px'}}>
          <b>{course.cname}</b><br />
          <b>{course.duration}</b>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
