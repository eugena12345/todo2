import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useEffect, useState } from "react";
import Pagination from './component/Pagination.jsx/Pagination';
import style from './App.module.css';
import axios from 'axios';
import API from './API/API.js'

const FIRST = 'first';
const LAST = 'last';
const ALL = ''; // у меня было 'all'.
const DONE = 'done';
const UNDONE = 'undone';


function App() {

  const [taskList, setTaskList] = useState([
    // { uuid: 1, name: 'Do something', createdAt: '10/4/2020', miliTaskDate: 1587292371000, done: false, },
    // {
    //   createdAt: "2022-05-31T17:43:26.386Z",
    //   done: false,
    //   name: "12",
    //   updatedAt: "2022-06-03T06:19:51.663Z",
    //   userId: "a6a18306-2c6b-4597-899c-936ec8277661",
    //   uuid: "bc5b3223-7b1d-40ee-9223-e6f17d992750",
    // }
  ])
  const [filtredTodoList, setFiltredTodoList] = useState(taskList);
  const [toDoLength, setToDoLength] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeOfSorted, setTypeOfSorted] = useState({ typeSortedByDate: FIRST, typeSortedByStatus: ALL });
  const [userID, setUserID] = useState(1);

  useEffect(() => {
    setFiltredTodoList(taskList)
  }, [taskList])



  const removeTask = (taskForRemove) => {
    setTaskList(taskList.filter(task => task.id !== taskForRemove.id))
  }

  const numberOfTaskOnPage = 5;
  const lastTaskIndex = currentPage * numberOfTaskOnPage;
  const firstTaskIndex = lastTaskIndex - numberOfTaskOnPage;
  //const currentTasks = filtredTodoList.slice(firstTaskIndex, lastTaskIndex);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const paginateForInput = () => {
    if (typeOfSorted.typeSortedByDate === FIRST) {
      const page = Math.ceil((filtredTodoList.length + 1) / numberOfTaskOnPage)
      setCurrentPage(page);
    } else if (typeOfSorted.typeSortedByDate === LAST) {
      setCurrentPage(1);
    }
  }

  const sort = () => {
    switch (typeOfSorted.typeSortedByStatus) {
      case ALL: {
        if (typeOfSorted.typeSortedByDate === LAST) {
          setFiltredTodoList([...taskList].sort((a, b) => b.miliTaskDate - a.miliTaskDate));
        } else if (typeOfSorted.typeSortedByDate === FIRST) {
          setFiltredTodoList([...taskList].sort((a, b) => a.miliTaskDate - b.miliTaskDate));
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

  // useEffect(() => {
  //   sort()
  // }, [typeOfSorted, taskList])

  //   API.get(`tasks/${userID}?order=asc&pp=${numberOfTaskOnPage}&page=1`)
  // .then(response => console.log(response.data));


  useEffect(() => {
    API.get(`tasks/${userID}`, {
      params: {
        filterBy: typeOfSorted.typeSortedByStatus,
        order: 'asc',
        pp: numberOfTaskOnPage,
        page: 1,
      }
    })
      .then((response) => {
        console.log(response.data);
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
      })
      .catch(err => alert(err));
    }, [setTaskList])
      

 


  return (
    <div className={style.App}>
      <h1>ToDo</h1>
      <div className={style.topPanel}>
        <InputTask
          setTaskList={setTaskList}
          taskList={taskList}
          paginateForInput={paginateForInput} />
        <SortTask
          setCurretnPage={setCurrentPage}
          setTypeOfSorted={setTypeOfSorted}
          typeOfSorted={typeOfSorted} />
      </div>
      {taskList.length
        ? <TaskList filtredTodoList={filtredTodoList} removeTask={removeTask}
          setTaskList={setTaskList} taskList={taskList} setFiltredTodoList={setFiltredTodoList}
        // currentTasks={currentTasks} 
        />
        : <div><h1>no tasks</h1>
          <img className={style.imgNoTask}
            src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
          /></div>
      }
      {toDoLength > numberOfTaskOnPage &&
        <Pagination length={toDoLength} numberOfTaskOnPage={numberOfTaskOnPage}
          paginate={paginate} currentPage={currentPage} />
      }
    </div>
  );
}

export default App;
