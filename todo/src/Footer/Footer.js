import PropTypes from 'prop-types';
import './Footer.css';

function Footer( { currentTasks, darkMode, deleteAllTasks }) {
    const cssClass = darkMode ? 'Footer Footer-dark' : 'Footer';

    return (
        <div className={cssClass}>
            <div className="counter"><span>{currentTasks}</span> tâche{currentTasks < 2 ? '' : 's'} en cours</div>
  
            <div onClick={deleteAllTasks}>Supprimer tâches finies</div>

            <div className="filter">
                <p>Tout</p>
                <p>En cours</p>
                <p>Terminé</p>
            </div>
        </div>
    );
  }

Footer.propTypes = {
    currentTasks: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
    deleteAllTasks: PropTypes.func.isRequired,
}
  
export default Footer;  