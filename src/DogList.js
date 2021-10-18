
import ShowDogDetail from "./ShowDogDetail";

/**Renders DogList
 * 
 * Props:
 *  - dogs: [{name, src, age, facts:[fact, ...] }, ..]
 * 
 * State: 
 *  - None
 * 
 * App->Routes->DogList->ShowDogDetail
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
