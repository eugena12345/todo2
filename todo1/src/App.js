import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useState } from "react";



function App() {

  const [tasks, setTasks] = useState([
    { id: 1, taskText: 'Do something', taskDate: '10/04/2022' },
    { id: 2, taskText: 'Do more', taskDate: '10/04/2022' },
    { id: 3, taskText: 'Learn React', taskDate: '10/04/2022' },
  ]
  )

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask />
        <SortTask />
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
