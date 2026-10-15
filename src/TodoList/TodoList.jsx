import React from 'react';

function TodoList() {
  const tasks = [
    'למוד ריאקט',
    'לפתור תרגיל בית במבני נתונים',
    'להכין קפה'
  ];

  return (
    <div>
      <h2>רשימת משימות</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;