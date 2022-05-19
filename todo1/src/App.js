import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useState } from "react";



function App() {

  const [taskList, setTaskList] = useState([
    { id: 1, taskText: 'Do something', taskDate: '10/4/2020', miliTaskDate: 1587292371000, isTaskDone: false, },
    { id: 2, taskText: 'Do more', taskDate: '10/4/2022', miliTaskDate: 1650364371000, isTaskDone: true, },
    { id: 3, taskText: 'Learn React', taskDate: '10/4/2021', miliTaskDate: 1618828371000, isTaskDone: false, },
    { id: 4, taskText: 'Learn React', taskDate: '20/4/2022', miliTaskDate: 1650450771000, isTaskDone: true, },
  ]
  )

  const removeTask = (taskForRemove) => {
    setTaskList(taskList.filter(task => task.id !== taskForRemove.id))
  }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask setTaskList={setTaskList} taskList={taskList} />
        <SortTask taskList={taskList} setTaskList={setTaskList} />
      </div>
      {taskList.length
        ? <TaskList taskList={taskList} removeTask={removeTask} />
        : <div><h1>no tasks</h1>
          <img
            src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
            width={450} /></div>
      }

    </div>
  );
}

export default App;
