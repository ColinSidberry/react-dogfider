import { useParams } from "react-router-dom";
import ShowDogDetail from "./ShowDogDetail";
import { Redirect } from "react-router-dom";

function DogDetails({ dogs }) {

    // console.log("detail dogs", dogs) //this is broken
    // const [dog, setDog] = useState({}); 
    //Question: compared app.js line 15 we had to use state. 
    // However, for similar functionality here using state results in 
    // the dog getting lost in re-render on line 32. Why is this? 
    const { name } = useParams();
    // console.log("dog details-dog before state is reset", dog) //but this is broken

    // console.log("name", name)
    for (let dog of dogs) {
        if (dog.name.toLowerCase() === name) {
            // console.log("matched dog", dog)
            //TODO: Make this a presentational component
            return (
                <ShowDogDetail dog={dog} />
            );
            // setDog(dog);
            //instead of setting state return the dogDetails Component
            // console.log("dog details-dog after state is reset", dog) //but this is broken
        }
    }

    return <Redirect to='/dogs' />



}

export default DogDetails;