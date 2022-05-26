import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useEffect, useState } from "react";
import Pagination from './component/Pagination.jsx/Pagination';

function App() {

  const [taskList, setTaskList] = useState([
    { id: 1, taskText: 'Do something', taskDate: '10/4/2020', miliTaskDate: 1587292371000, isCompleted: false, },
    { id: 2, taskText: 'Do more', taskDate: '10/4/2022', miliTaskDate: 1650364371000, isCompleted: false, },
    { id: 3, taskText: 'Learn React', taskDate: '10/4/2021', miliTaskDate: 1618828371000, isCompleted: false, },
    { id: 4, taskText: 'rty', taskDate: '20/4/2022', miliTaskDate: 1650450771000, isCompleted: false, },
    { id: 5, taskText: 'cvb', taskDate: '10/4/2020', miliTaskDate: 1587292371000, isCompleted: false, },
    { id: 6, taskText: 'jkl', taskDate: '10/4/2022', miliTaskDate: 1650364371000, isCompleted: false, },
    { id: 7, taskText: 'qwe', taskDate: '10/4/2021', miliTaskDate: 1618828371000, isCompleted: false, },
    { id: 8, taskText: 'zxc', taskDate: '20/4/2022', miliTaskDate: 1650450771000, isCompleted: false, },
  ])
  const [filtredTodoList, setFiltredTodoList] = useState(taskList);
  const [currentPage, setCurretnPage] = useState(1)

  useEffect(() => {
    setFiltredTodoList(taskList)
  }, [taskList])

  const removeTask = (taskForRemove) => {
    setTaskList(taskList.filter(task => task.id !== taskForRemove.id))
  }

  const numberOfTaskOnPage = 5;
  const lastTaskIndex = currentPage * numberOfTaskOnPage;
  const firstTaskIndex = lastTaskIndex - numberOfTaskOnPage;
  const currentTasks = filtredTodoList.slice(firstTaskIndex, lastTaskIndex);
  const paginate = (pageNumber) => {
    setCurretnPage(pageNumber)
  }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask setTaskList={setTaskList} taskList={taskList} />
        <SortTask taskList={taskList} filtredTodoList={filtredTodoList} setTaskList={setTaskList}
          setFiltredTodoList={setFiltredTodoList} setCurretnPage={setCurretnPage} />
      </div>
      {taskList.length
        ? <TaskList filtredTodoList={filtredTodoList} removeTask={removeTask}
          setTaskList={setTaskList} taskList={taskList} setFiltredTodoList={setFiltredTodoList}
          currentTasks={currentTasks} />
        : <div><h1>no tasks</h1>
          <img
            src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
            width={450} /></div>
      }
      {filtredTodoList.length > numberOfTaskOnPage &&
        <Pagination length={filtredTodoList.length} numberOfTaskOnPage={numberOfTaskOnPage}
          paginate={paginate} currentPage={currentPage} />
      }
    </div>
  );
}

export default App;
