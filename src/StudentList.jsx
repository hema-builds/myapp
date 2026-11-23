import React from 'react';

function StudentList() {
  const students = [
    { id: 1, name: 'ABC' },
    { id: 2, name: 'DEF' }
  ];

  return (
    <div>
      {students.map((student) => (
        <React.Fragment key={student.id}>
          <h3>{student.name}</h3>
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
}

export default StudentList;