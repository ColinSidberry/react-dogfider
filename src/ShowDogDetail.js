
import "./ShowDogDetail.css";
import { Link } from "react-router-dom";
/**Shows Dog Details
 * 
 * Props:
 *  - dog: {name, src, age, facts:[fact, ...] }
 * 
 * State: 
 *  - None
 * 
 * (DogList, DogDetails)->ShowDogDetails
*/
function ShowDogDetail({ dog }) {
    return (
        <div className="ShowDogDetail">
            <h1><Link exact to={`/dogs/${dog.name}`}>{dog.name}</Link> </h1>
            <img src={`/${dog.src}.jpg`} alt={dog.name} className="ShowDogDetail-image" />
            <h2> Age: {dog.age}</h2>
            <ul>
                {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default ShowDogDetail;