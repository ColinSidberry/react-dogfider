import { useParams } from "react-router-dom";
import { useState } from "react"

function DogDetails({ dogs }) {

    console.log("detail dogs", dogs) //this is broken
    // const [dog, setDog] = useState({}); 
    //Question: compared app.js line 15 we had to use state. 
    // However, for similar functionality here using state results in 
    // the dog getting lost in re-render on line 32. Why is this? 
    const { name } = useParams();
    // console.log("dog details-dog before state is reset", dog) //but this is broken
    if (name) {
        // console.log("name", name)
        for (let dog of dogs) {
            if (dog.name.toLowerCase() === name) {
                console.log("matched dog", dog)
                //TODO: Make this a presentational component
                return (
                    <div>
                        <h1>{dog.name} </h1>
                        <img src={`/${dog.src}.jpg`} alt={dog.name} />{/**FIXME: img file path is broken */}
                        <h2> Age: {dog.age}</h2>
                        <ul>
                            {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
                        </ul>
                    </div>
                );
                // setDog(dog);
                //instead of setting state return the dogDetails Component
                // console.log("dog details-dog after state is reset", dog) //but this is broken
            }
        }
    }
    // console.log("dog details-dog before return", dog) //but this is broken
    //

    // return (
    //     <div>
    //         <h1>{dog.name} </h1>
    //         <img src={dog.src} alt={dog.name} />
    //         <h2> Age: {dog.age}</h2>
    //         <ul>
    //             {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
    //         </ul>
    //     </div>
    // );


}

export default DogDetails;