import PropTypes from 'prop-types';
import './AddTaskForm.css';

function AddTaskForm({ darkMode, newTaskName, setNewTaskName, addTask }) {

    const cssClass = darkMode ? 'AddTaskForm form-dark' : 'AddTaskForm';

    const handleChange = (e) => {
        setNewTaskName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask();
    }

    return (
        <form action="" className={cssClass} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Créer une nouvelle tâche"
                value={newTaskName}
                onChange={handleChange}
            />
        </form>
    );
  }

AddTaskForm.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    newTaskName: PropTypes.string.isRequired,
    setNewTaskName: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
}

export default AddTaskForm;  