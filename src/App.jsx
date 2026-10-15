import React from 'react';
import TodoList from './TodoList/TodoList'; // ייבוא הקומפוננטה שיצרנו

function App() {
  return (
    <div>
      <h1>אפליקציית ניהול משימות</h1>
      <TodoList />
    </div>
  );
}

export default App;