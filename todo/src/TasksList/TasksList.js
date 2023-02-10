import PropTypes from 'prop-types';
import './TasksList.css';

function TasksList( { tasksList, darkMode, toggleTask, deleteTask }) {
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
                            <div
                                className='delete'
                                onClick={() => deleteTask(task.id)}>
                                    &#10060;
                            </div>
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
    toggleTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
};
  
export default TasksList;  