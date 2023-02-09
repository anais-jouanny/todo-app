import PropTypes from 'prop-types';
import './Footer.css';

function Footer( { currentTasks, darkMode }) {
    const cssClass = darkMode ? 'Footer Footer-dark' : 'Footer';

    return (
        <div className={cssClass}>
            <div className="counter"><span>{currentTasks}</span> tâches en cours</div>
  
            <div>Supprimer tâches finies</div>

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
}
  
export default Footer;  