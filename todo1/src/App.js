import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';
import Tasks from './component/Tasks/Tasks';


function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
        <InputTask />
        <SortTask />
      </div>
      <Tasks />
    </div>
  );
}

export default App;
