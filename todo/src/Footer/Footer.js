import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';
import './Footer.css';

function Footer( { pendingTasks, darkMode, deleteAllTasks }) {
    const cssClassDark = darkMode ? 'Footer Footer-dark' : 'Footer';
    const cssClassActive = ({isActive}) => isActive ? 'active' : '';

    return (
        <div className={cssClassDark}>
            <div className="counter"><span>{pendingTasks}</span> tâche{pendingTasks < 2 ? '' : 's'} en cours</div>
  
            <div onClick={deleteAllTasks}>Supprimer tâches finies</div>

            <div className="filter">
                <NavLink to="/" className={cssClassActive}><p>Tout</p></NavLink>
                <NavLink to="/pending"><p>En cours</p></NavLink>
                <NavLink to="/done"><p>Terminé</p></NavLink>                
            </div>
        </div>
    );
  }

Footer.propTypes = {
    pendingTasks: PropTypes.number.isRequired,
    darkMode: PropTypes.bool.isRequired,
    deleteAllTasks: PropTypes.func.isRequired,
}
  
export default Footer;  