import PropTypes from 'prop-types';
import './AddTaskForm.css';

function AddTaskForm({ darkMode, newTaskName, setNewTaskName }) {

    const cssClass = darkMode ? 'AddTaskForm form-dark' : 'AddTaskForm';

    const handleChange = (e) => {
        setNewTaskName(e.target.value);
    }

    return (
        <form action="" className={cssClass}>
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
}

export default AddTaskForm;  