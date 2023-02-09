import PropTypes from 'prop-types';
import './AddTaskForm.css';

function AddTaskForm({ darkMode }) {

    const cssClass = darkMode ? 'AddTaskForm form-dark' : 'AddTaskForm';

    return (
        <form action="" className={cssClass}>
            <input type="text" placeholder="Créer une nouvelle tâche" />
        </form>
    );
  }

AddTaskForm.propTypes = {
    darkMode: PropTypes.bool.isRequired,
}

export default AddTaskForm;  