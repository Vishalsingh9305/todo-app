import React, { useState } from 'react';
import './App.css';

// Define a Task interface
interface Task {
  id: number;
  content: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState<string>('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        content: taskInput.trim()
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.content}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
