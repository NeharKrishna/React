import React from 'react';
import StudentCard from './StudentCard';
import './App.css';

const students = [
  { name: 'Ajay', age: 21, college: 'MIT', roll: 'MIT101' },
  { name: 'Nehar', age: 22, college: 'Stanford', roll: 'ST102' },
  { name: 'Nithish', age: 20, college: 'Harvard', roll: 'HR103' },
  { name: 'Bhargav', age: 23, college: 'Yale', roll: 'YA104' },
  { name: 'Venkatesh', age: 23, college: 'Yale', roll: 'YA104' },
  { name: 'Shree', age: 23, college: 'Yale', roll: 'YA104' },
  { name: 'Lalith', age: 23, college: 'Yale', roll: 'YA104' },
  { name: 'Harshith', age: 23, college: 'Yale', roll: 'YA104' }
];

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>
      <div className="student-container">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
