import PropTypes from 'prop-types';
import './TasksList.css';

function TasksList( { tasksList, darkMode }) {
    const cssClassDiv = darkMode ? 'TasksList list-dark' : 'TasksList';

    return (
        <div className={cssClassDiv}>
            <ul>
                {tasksList.map((task) => {
                    const cssClassLi = task.done ? 'task-done' : '';
                    const cssClassCircle = task.done ? 'circle-done' : '';

                    return (
                        <li className={cssClassLi} key={task.id}>
                            <div className={cssClassCircle}></div>
                        {task.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
  }

TasksList.propTypes = {
    tasksList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    })).isRequired,
    darkMode: PropTypes.bool.isRequired,
};
  
export default TasksList;  