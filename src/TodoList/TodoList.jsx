import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

function TodoList() {

  const [tasks, setTasks] = useState([
    'למוד ריאקט',
    'לפתור תרגיל בית במבני נתונים',
    'להכין קפה'
  ]);

  const [newTaskText, setNewTaskText] = useState("");


  const handleAddTask = (e) => {
    e.preventDefault(); 
    const trimmedTask = newTaskText.trim();
    if (trimmedTask === "") {
      alert("אי אפשר להוסיף משימה ריקה!");
      return;
    }
    if (tasks.includes(trimmedTask)) {
      alert("המשימה הזו כבר קיימת ברשימה!");
      return;
    }

    setTasks([...tasks, trimmedTask]);

    setNewTaskText("");
  };

  return (
    <div>
      <h2>רשימת משימות</h2>

  
      <form onSubmit={handleAddTask}>
        <input 
          type="text" 
          placeholder="הקלד משימה חדשה..." 
          value={newTaskText} 
          onChange={(e) => setNewTaskText(e.target.value)} 
        />
        <button type="submit">הוסף</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} taskText={task} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;