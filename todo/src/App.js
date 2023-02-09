import { useEffect, useState } from 'react';

import './App.css';
import iconMoon from './images/icon-moon.svg';

import AddTaskForm from './AddTaskForm/AddTaskForm';
import Footer from './Footer/Footer';
import TasksList from './TasksList/TasksList';
import Header from './Header/Header';
import datas from './data/tasks';

function App() {
  // STATE :
  // -darkmode: bool
  // -newTaskValue: ''
  const [tasksList, setTasksList] = useState(datas);
  const [darkMode, setDarkMode] = useState(false);

  const currentTasks = tasksList.filter((task) => !task.done);

  console.log(tasksList);
  
  
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={() => {setDarkMode(!darkMode)}} />
      <AddTaskForm />
      <TasksList tasksList={tasksList} />
      <Footer currentTasks={currentTasks.length} />
    </div>
  );
}

export default App;
