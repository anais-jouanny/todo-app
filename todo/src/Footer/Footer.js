import './Footer.css';

function Footer() {
    return (
        <div className="Footer">
            <div className="counter"><span>5</span> tâches en cours</div>
  
            <div>Supprimer tâches finies</div>

            <div className="filter">
                <p>Tout</p>
                <p>En cours</p>
                <p>Terminé</p>
            </div>
        </div>
    );
  }
  
export default Footer;  