import PropTypes from 'prop-types';
import './Footer.css';

function Footer( { currentTasks }) {
    return (
        <div className="Footer">
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
}
  
export default Footer;  