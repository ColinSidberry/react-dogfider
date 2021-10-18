
import "./ShowDogDetail.css";

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
        <div className="dog">
            <h1>{dog.name} </h1>
            <img src={`/${dog.src}.jpg`} alt={dog.name} className="dog-image" />
            <h2> Age: {dog.age}</h2>
            <ul>
                {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    );
}

export default ShowDogDetail;