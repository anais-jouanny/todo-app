import PropTypes from 'prop-types';
import './TasksList.css';

function TasksList( { tasksList, darkMode, toggleTask }) {
    const cssClassDiv = darkMode ? 'TasksList list-dark' : 'TasksList';

    return (
        <div className={cssClassDiv}>
            <ul>
                {tasksList.map((task) => {
                    const cssClassLi = task.done ? '-done' : '';

                    return (
                        <li className={`task${cssClassLi}`} key={task.id}>
                            <div
                                className={`circle${cssClassLi}`}
                                onClick={() => toggleTask(task.id)}
                            >
                            </div>
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