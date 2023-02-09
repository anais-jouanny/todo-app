import './TasksList.css';

function TasksList() {
    return (
        <div className="TasksList">
            <ul>
                <li className="task-done"><div className="circle-done"></div> Laver les 10 biberons qui traînent</li>
                <li><div></div>Faire une sieste</li>
                <li><div></div>Finir le bonnet trop cute commencé il y a 5 mois</li>
                <li><div></div>Acheter gants, masque et pince à linge</li>
                <li><div></div>Lire un livre</li>
                <li><div></div>Apprendre à coder</li>
            </ul>
        </div>
    );
  }
  
export default TasksList;  