
import ShowDogDetail from "./ShowDogDetail";

function DogList({ dogs }) {
    // console.log("dogList", dogs) //this is broken
    return (
        <div>
            {dogs.map(dog =>
                <ShowDogDetail dog={dog} key={dog.name} />
            )}
        </div>
    )
}


export default DogList;