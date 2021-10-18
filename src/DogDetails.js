import { useParams } from "react-router-dom";
import ShowDogDetail from "./ShowDogDetail";
import { Redirect } from "react-router-dom";

/**Renders Dog Name from URL Param
 * 
 * Props:
 *  - dogs: [{name, src, age, facts:[fact, ...] }, ..]
 * 
 * State: 
 *  - None
 * 
 * App->Routes->DogDetails->ShowDogDetail
*/
function DogDetails({ dogs }) {
    // const [dog, setDog] = useState({}); 
    //Question: compared app.js line 15 we had to use state. 
    // However, for similar functionality here using state results in 
    // the dog getting lost in re-render on line 32. Why is this? 
    const { name } = useParams();

    for (let dog of dogs) {
        if (dog.name.toLowerCase() === name.toLowerCase()) {
            return (
                <ShowDogDetail dog={dog} />
            );
            // setDog(dog);
            //instead of setting state return the dogDetails Component
        }
    }

    return <Redirect to='/dogs' />



}

export default DogDetails;