import PropTypes from 'prop-types';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
    const cssClassIcon = darkMode ? 'icon icon-dark' : 'icon icon-light';
    
    const handleClick = () => {
        document.body.classList.toggle('body-dark');
        toggleDarkMode();
    };

    return (
        <div>
            <header>
                <h1>TODO<span className={cssClassIcon} onClick={handleClick}></span></h1>
            </header>
        </div>
    );
  }

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
}
  
export default Header;  