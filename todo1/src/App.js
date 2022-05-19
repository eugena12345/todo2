import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useState } from "react";



function App() {

  const [taskList, setTaskList] = useState([
    { id: 1, taskText: 'Do something', taskDate: '10/4/2020', miliTaskDate: 1587292371000, isTaskDone: false, },
    { id: 2, taskText: 'Do more', taskDate: '10/4/2022', miliTaskDate: 1650364371000, isTaskDone: false, },
    { id: 3, taskText: 'Learn React', taskDate: '10/4/2021', miliTaskDate: 1618828371000, isTaskDone: false, },
    { id: 4, taskText: 'Learn React', taskDate: '20/4/2022', miliTaskDate: 1650450771000, isTaskDone: false, },
  ]
  )

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask setTaskList={setTaskList} taskList={taskList}/>
        <SortTask />
      </div>
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
