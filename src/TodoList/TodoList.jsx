import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

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
          <TodoItem key={index} taskText={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;