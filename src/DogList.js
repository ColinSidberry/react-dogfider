
import ShowDogDetail from "./ShowDogDetail";

/**Renders DogList
 * 
 * Props:
 *  - dogs: [{name, src, age, facts:[fact, ...] }, ..]
 * 
 * State: 
 *  - None
 * 
 * routed from "/dogs"
*/
function DogList({ dogs }) {
    return (
        <div>
            {dogs.map(dog =>
                <ShowDogDetail dog={dog} key={dog.name} />
            )}
        </div>
    )
}



export default DogList;
