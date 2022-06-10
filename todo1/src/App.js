import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import TaskList from './component/Tasks/TaskList';
import React, { useEffect, useState } from "react";
import Pagination from './component/Pagination.jsx/Pagination';
import style from './App.module.css';
import API from './API/API.js'
import Loading from './Loading/Loading';

const FIRST = 'asc';
const LAST = 'desc';
const ALL = '';

function App() {

  const [taskList, setTaskList] = useState([])
  const [toDoLength, setToDoLength] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [typeOfSorted, setTypeOfSorted] = useState({ typeSortedByDate: FIRST, typeSortedByStatus: ALL });
  const [userID, setUserID] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [pageForPagination, setPageForPagination] = useState(1);
  const numberOfTaskOnPage = 5;

  const paginate = (pageNumber) => {
    setIsLoading(true);
    API.get(`tasks/${userID}`, {
      params: {
        filterBy: typeOfSorted.typeSortedByStatus,
        order: typeOfSorted.typeSortedByDate,
        pp: numberOfTaskOnPage,
        page: pageNumber,
      }
    })
      .then((response) => {
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
        setIsLoading(false);
      })
      .catch(err => alert(err));


    setCurrentPage(pageNumber)
  }

  const getTaskList = async () => {
    setIsLoading(true);
    API.get(`tasks/${userID}`, {
      params: {
        filterBy: typeOfSorted.typeSortedByStatus,
        order: typeOfSorted.typeSortedByDate,
        pp: numberOfTaskOnPage,
        page: currentPage,
      }
    })
      .then((response) => {
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
        setPageForPagination(Math.ceil(response.data.count / numberOfTaskOnPage));
        setIsLoading(false);
      })
      .catch(err => alert(err));
  }

  const createTask = async (taskText) => {
    setIsLoading(true);
    API.post(`task/${userID}`, {
      name: taskText,
    })
      .then(() => {
        let page;
        typeOfSorted.typeSortedByDate === FIRST
          ? page = (Math.ceil((toDoLength + 1) / numberOfTaskOnPage))
          : page = 1;
        setCurrentPage(page);
        API.get(`tasks/${userID}`, {
          params: {
            filterBy: typeOfSorted.typeSortedByStatus,
            order: typeOfSorted.typeSortedByDate,
            pp: numberOfTaskOnPage,
            page: page,
          }
        })
          .then((response) => {
            console.log(response)
            setTaskList(response.data.tasks);
            setPageForPagination(Math.ceil(response.data.count / numberOfTaskOnPage));
            setIsLoading(false);
          })
      })
      .catch(err => alert(err));
  }

  const removeTask = async (taskForRemoveID) => {
    setIsLoading(true);
    API.delete(`task/${userID}/${taskForRemoveID}`)
      .then((response) => {
        if (response.status === 204) {
          getTaskList();
          if (taskList.length <= 1) {
            paginate(currentPage - 1)//подумать и над этим
          }
        }
        setIsLoading(false);
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
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch(err => alert(err));
  }

  const changeTaskText = async (taskForChangeID, updatedTaskText) => {
    setIsLoading(true);
    API.patch(`task/${userID}/${taskForChangeID}`, {
      name: updatedTaskText,
    })
      .then((response) => {
        const newTaskList = taskList.filter((item) => {
          if (item.uuid === taskForChangeID) {
            const itemCopy = { ...item }
            itemCopy.name = response.data.name;
            return itemCopy;
          }
          return item
        })
        setTaskList(newTaskList);
        setIsLoading(false);
      })
      .catch(err => alert(err));
  }

  const getSortByDateTaskList = async (typeSortedByDate) => {
    setIsLoading(true);
    API.get(`tasks/${userID}`, {
      params: {
        filterBy: typeOfSorted.typeSortedByStatus,
        order: typeSortedByDate,
        pp: numberOfTaskOnPage,
        page: currentPage,
      }
    })
      .then((response) => {
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
        setIsLoading(false);
      })
      .catch(err => alert(err));
  }

  const getSortByStatusTaskList = async (status) => {
    setCurrentPage(1)
    setIsLoading(true);
    API.get(`tasks/${userID}`, {
      params: {
        filterBy: status,
        order: typeOfSorted.typeSortedByDate,
        pp: numberOfTaskOnPage,
        page: 1,
      }
    })
      .then((response) => {
        setTaskList(response.data.tasks);
        setToDoLength(response.data.count);
        setPageForPagination(Math.ceil(response.data.count / numberOfTaskOnPage));
        setIsLoading(false);
      })
      .catch(err => alert(err));
  }


  useEffect(() => {
    getTaskList();
  }, [setTaskList])

  return (
    <div className={style.App}>
      <h1>ToDo</h1>
      <div className={style.topPanel}>
        <InputTask
          createTask={createTask} />
        <SortTask
          setCurretnPage={setCurrentPage}
          setTypeOfSorted={setTypeOfSorted}
          typeOfSorted={typeOfSorted}
          getSortByDateTaskList={getSortByDateTaskList}
          getSortByStatusTaskList={getSortByStatusTaskList}
        />
      </div>
      {isLoading
        ? <Loading />
        : taskList.length
          ? <TaskList taskList={taskList} removeTask={removeTask}
            changeDone={changeDone} changeTaskText={changeTaskText}
          />
          : <div><h1>no tasks</h1>
            <img className={style.imgNoTask}
              src='https://img.freepik.com/free-vector/coffee-quotes-svg-design-vector_22345-1171.jpg?w=740'
            /></div>
      }
      {toDoLength > numberOfTaskOnPage &&
        <Pagination
          pageForPagination={pageForPagination}
          paginate={paginate}
          currentPage={currentPage} />
      }
    </div>
  );
}

export default App;
