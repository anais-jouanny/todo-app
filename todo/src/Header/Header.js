import PropTypes from 'prop-types';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
    const cssClass = darkMode ? ' dark' : '';
    
    const handleClick = () => {
        document.body.classList.toggle('body-dark');
        toggleDarkMode();
    };

    return (
        <div className={`Header${cssClass}`}>
            <header>
                <h1>TODO<span className="icon" onClick={handleClick}></span></h1>
            </header>
        </div>
    );
  }

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
}
  
export default Header;  