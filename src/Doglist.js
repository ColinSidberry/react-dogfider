
import DogDetails from "./DogDetails";

function Doglist({ dogs }) {
    return (
        dogs.map(dog => <DogDetails dog={dog} key={dog.name} />)
    )
}


export default Doglist;