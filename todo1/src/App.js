import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useEffect, useState } from "react";

function App() {

  const [taskList, setTaskList] = useState([
    { id: 1, taskText: 'Do something', taskDate: '10/4/2020', miliTaskDate: 1587292371000, isCompleted: false, },
    { id: 2, taskText: 'Do more', taskDate: '10/4/2022', miliTaskDate: 1650364371000, isCompleted: false, },
    { id: 3, taskText: 'Learn React', taskDate: '10/4/2021', miliTaskDate: 1618828371000, isCompleted: false, },
    { id: 4, taskText: 'Learn React', taskDate: '20/4/2022', miliTaskDate: 1650450771000, isCompleted: false, },
  ])

  useEffect(() => {
    setFiltredTodoList(taskList)
  }, [taskList])

  const removeTask = (taskForRemove) => {
    setTaskList(taskList.filter(task => task.id !== taskForRemove.id))
  }

  const [filtredTodoList, setFiltredTodoList] = useState(taskList);

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask setTaskList={setTaskList} taskList={taskList} />
        <SortTask taskList={taskList} setFiltredTodoList={setFiltredTodoList} />
      </div>
      {taskList.length
        ? <TaskList filtredTodoList={filtredTodoList} removeTask={removeTask}
        setTaskList={setTaskList} taskList={taskList} setFiltredTodoList={setFiltredTodoList} />
        : <div><h1>no tasks</h1>
          <img
            src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
            width={450} /></div>
      }
    </div>
  );
}

export default App;
