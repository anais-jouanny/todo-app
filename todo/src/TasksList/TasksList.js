import PropTypes from 'prop-types';
import './TasksList.css';

function TasksList( { tasksList }) {
    return (
        <div className="TasksList">
            <ul>
                {tasksList.map((task) => {
                    const cssClassLi = task.done ? 'task-done' : '';
                    const cssClassDiv = task.done ? 'circle-done' : '';

                    return (
                        <li className={cssClassLi} key={task.id}>
                            <div className={cssClassDiv}></div>
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
};
  
export default TasksList;  