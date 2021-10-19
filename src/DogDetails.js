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
 * routed from "/dogs/:name"
*/
function DogDetails({ dogs }) {
    // const [dog, setDog] = useState({}); 
    //Question: compared app.js line 15 we had to use state. 
    // However, for similar functionality here using state results in 
    // the dog getting lost in re-render on line 32. Why is this? 
    const { name } = useParams();

    const foundDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase())
    if (!foundDog) return <Redirect to='/dogs' />

    return <ShowDogDetail dog={foundDog} />

}



export default DogDetails;