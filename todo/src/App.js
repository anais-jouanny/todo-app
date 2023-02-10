import { useEffect, useState } from 'react';

import './App.css';

import AddTaskForm from './AddTaskForm/AddTaskForm';
import Footer from './Footer/Footer';
import TasksList from './TasksList/TasksList';
import Header from './Header/Header';
import datas from './data/tasks';

function App() {

  const [tasksList, setTasksList] = useState(datas);
  const [darkMode, setDarkMode] = useState(false);

  const currentTasks = tasksList.filter((task) => !task.done);

  const toggleTask = (taskId) => {
    const updatedTasks = tasksList.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          done: !task.done,
        }
      }
      return task;
    });

    setTasksList(updatedTasks);
  }

  console.log(tasksList);
  
  
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={() => {setDarkMode(!darkMode)}} />
      <AddTaskForm darkMode={darkMode} />
      <TasksList tasksList={tasksList} darkMode={darkMode} toggleTask={toggleTask} />
      <Footer currentTasks={currentTasks.length} darkMode={darkMode} />
    </div>
  );
}

export default App;
