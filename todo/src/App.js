import AddTaskForm from './AddTaskForm/AddTaskForm';
import './App.css';
import Footer from './Footer/Footer';
import TasksList from './TasksList/TasksList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TODO<span>&#9789;</span></h1>
      </header>
      <AddTaskForm />
      <TasksList />
      <Footer />
    </div>
  );
}

export default App;
