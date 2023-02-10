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
  const [newTaskName, setNewTaskName] = useState('');

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
  };

  const addTask = () => {
    const tasksIds = tasksList.map((task) => task.id);
    const maxId = Math.max(...tasksIds);
    const newTaskId = maxId + 1;

    const newTask = {
      id: newTaskId,
      name: newTaskName,
      done: false,
    }

    setTasksList([...tasksList, newTask])

    setNewTaskName('');
  };

  const deleteAllTasks = () => {
    setTasksList(currentTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasksList.filter((task) => task.id !== taskId);

    setTasksList(updatedTasks);
  };
  
  
  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={() => {setDarkMode(!darkMode)}} />
      <AddTaskForm darkMode={darkMode} newTaskName={newTaskName} setNewTaskName={setNewTaskName} addTask={addTask} />
      <TasksList tasksList={tasksList} darkMode={darkMode} toggleTask={toggleTask} deleteTask={deleteTask} />
      <Footer currentTasks={currentTasks.length} darkMode={darkMode} deleteAllTasks={deleteAllTasks} />
    </div>
  );
}

export default App;
