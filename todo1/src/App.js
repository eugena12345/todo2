import './App.css';
import InputTask from './component/InputTask/InputTask';
import SortTask from './component/SortTask/SortTask';

function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <div className='topPanel'>
      <InputTask/>
      <SortTask/>
        
      </div>
    </div>
  );
}

export default App;
