
import DogDetails from "./DogDetails";

function DogList({ dogs }) {
    console.log("dogList", dogs) //this is broken
    return (
        dogs.map(dog => <DogDetails dog={dog} key={dog.name} />)
    )
}


export default DogList;