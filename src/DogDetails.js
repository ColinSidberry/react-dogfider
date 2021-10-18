import { useParams } from "react-router-dom";
import { useState } from "react"

function DogDetails({ dogs }) {

    console.log("detail dogs", dogs)

    const [dog, setDog] = useState({});
    const { name } = useParams();

    if (name) {
        console.log("name", name)
        for (let dog of dogs) {
            if (dog.name.toLowerCase() === name) {
                console.log("matched dog", dog)
                setDog(dog);
            }
        }
        console.log("dog details-dog", dog)
    }

    return (
        <div>
            <h1>{dog.name} </h1>
            <img src={dog.src} alt={dog.name} />
            <h2> Age: {dog.age}</h2>
            <ul>
                {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
            </ul>
        </div>
    );


}

export default DogDetails;