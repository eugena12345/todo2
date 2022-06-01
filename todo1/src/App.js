import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useEffect, useState } from "react";
import Pagination from './component/Pagination.jsx/Pagination';
import style from './App.module.css';

const FIRST = 'first';
const LAST = 'last';
const ALL = 'all';
const DONE = 'done';
const UNDONE = 'undone';


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
  const [currentPage, setCurretnPage] = useState(1);
  const [typeOfSorted, setTypeOfSorted] = useState({ typeSortedByDate: FIRST, typeSortedByStatus: ALL });

  useEffect(() => {
    setFiltredTodoList(taskList)
  }, [taskList])

  useEffect(() => {
    sort(typeOfSorted)
  }, [typeOfSorted, taskList])

  const removeTask = (taskForRemove) => {
    setTaskList(taskList.filter(task => task.id !== taskForRemove.id))
  }

  const numberOfTaskOnPage = 5;
  const lastTaskIndex = currentPage * numberOfTaskOnPage;
  const firstTaskIndex = lastTaskIndex - numberOfTaskOnPage;
  const currentTasks = filtredTodoList.slice(firstTaskIndex, lastTaskIndex);
  const paginate = (pageNumber) => {
    setCurretnPage(pageNumber)//
  }

  const paginateForInput = () => {
    if (typeOfSorted.typeSortedByDate === FIRST) {
      const page = Math.ceil((filtredTodoList.length + 1) / numberOfTaskOnPage)
      setCurretnPage(page);
    } else if (typeOfSorted.typeSortedByDate === LAST) {
      setCurretnPage(1);
    }
  }

  const sort = (typeOfSorted) => {//
    switch (typeOfSorted.typeSortedByStatus) {
      case ALL: {
        if (typeOfSorted.typeSortedByDate === LAST) {
          setTaskList([...taskList].sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        } else if (typeOfSorted.typeSortedByDate === FIRST) {
          setTaskList([...taskList].sort((a, b) => a.miliTaskDate - b.miliTaskDate));
        }
        return
      }
      case DONE: {
        if (typeOfSorted.typeSortedByDate === LAST) {
          setFiltredTodoList(taskList.filter(item => item.isCompleted === true).sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        } else if (typeOfSorted.typeSortedByDate === FIRST) {
          setFiltredTodoList(taskList.filter(item => item.isCompleted === true).sort((a, b) => a.miliTaskDate - b.miliTaskDate));
        }
        return
      }
      case UNDONE: {
        if (typeOfSorted.typeSortedByDate === LAST) {
          setFiltredTodoList(taskList.filter(item => item.isCompleted === false).sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        } else if (typeOfSorted.typeSortedByDate === FIRST) {
          setFiltredTodoList(taskList.filter(item => item.isCompleted === false).sort((a, b) => a.miliTaskDate - b.miliTaskDate));
        }
        return
      }
    }

  }

  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask setTaskList={setTaskList} taskList={taskList} paginateForInput={paginateForInput} />
        <SortTask 
        taskList={taskList} 
        filtredTodoList={filtredTodoList} 
        setTaskList={setTaskList}
          setFiltredTodoList={setFiltredTodoList} 
          setCurretnPage={setCurretnPage}
          sort={sort} 
          setTypeOfSorted={setTypeOfSorted} 
          typeOfSorted={typeOfSorted} />
      </div>
      {taskList.length
        ? <TaskList filtredTodoList={filtredTodoList} removeTask={removeTask}
          setTaskList={setTaskList} taskList={taskList} setFiltredTodoList={setFiltredTodoList}
          currentTasks={currentTasks} />
        : <div><h1>no tasks</h1>
          <img className={style.imgNoTask}
            src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
             /></div>
      }
      {filtredTodoList.length > numberOfTaskOnPage &&
        <Pagination length={filtredTodoList.length} numberOfTaskOnPage={numberOfTaskOnPage}
          paginate={paginate} currentPage={currentPage} />
      }
    </div>
  );
}

export default App;
