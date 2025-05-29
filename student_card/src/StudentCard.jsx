import React from 'react';
import './App.css'; // or a separate CSS file if preferred

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>College:</strong> {student.college}</p>
      <p><strong>Roll No:</strong> {student.roll}</p>
    </div>
  );
}

export default StudentCard;
