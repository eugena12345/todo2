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

  const [taskList, setTaskList] = useState([])
  const [filtredTodoList, setFiltredTodoList] = useState(taskList);
  const [toDoLength, setToDoLength] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeOfSorted, setTypeOfSorted] = useState({ typeSortedByDate: FIRST, typeSortedByStatus: ALL });
  const [userID, setUserID] = useState(6);

  // useEffect(() => {
  //   setFiltredTodoList(taskList)
  // }, [taskList]);





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
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
      })
      .catch(err => alert(err));
  }, [setTaskList])

  const createTask = async (taskText) => {
    API.post(`task/${userID}`, {
      name: taskText,
    })
      .then((response) => {
        setTaskList([...taskList, response.data]);
        setToDoLength(toDoLength + 1);
      })
      .catch(err => alert(err));
  }

  const removeTask = async (taskForRemoveID) => {
    API.delete(`task/${userID}/${taskForRemoveID}`)
      .then((response) => {
        (response.status === 204) && setTaskList(taskList.filter(task => task.uuid !== taskForRemoveID));
      })
      .catch(err => alert(err));
  }

  const changeDone = async (taskForChange) => {
    let checkboxValue;
    if (taskForChange.done) {
      checkboxValue = false;
    } else {
      checkboxValue = true;
    }
    API.patch(`task/${userID}/${taskForChange.uuid}`, {
      done: checkboxValue,
    })
      .then((response) => {
        const newTaskList = [...taskList].filter((item) => {//
          if (item.uuid === taskForChange.uuid) {
            item.done = response.data.done;
          }
          return item
        })
        setTaskList(newTaskList);
      })
      .catch(err => alert(err));
  }

  const changeTaskText = async (taskForChangeID, updatedTaskText) => {
    API.patch(`task/${userID}/${taskForChangeID}`, {
      name: updatedTaskText,
    })
      .then((response) => {
        const newTaskList = [...taskList].filter((item) => {//
          if (item.uuid === taskForChangeID) {
            item.name = response.data.name;
          }
          return item
        })
        setTaskList(newTaskList);
      })
      .catch(err => alert(err));
  }

  return (
    <div className={style.App}>
      <h1>ToDo</h1>
      <div className={style.topPanel}>
        <InputTask
          setTaskList={setTaskList}
          taskList={taskList}
          paginateForInput={paginateForInput}
          createTask={createTask} />
        <SortTask
          setCurretnPage={setCurrentPage}
          setTypeOfSorted={setTypeOfSorted}
          typeOfSorted={typeOfSorted} />
      </div>
      {taskList.length
        ? <TaskList filtredTodoList={filtredTodoList} removeTask={removeTask}
          setTaskList={setTaskList} taskList={taskList} setFiltredTodoList={setFiltredTodoList}
          changeDone={changeDone} changeTaskText={changeTaskText}
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
