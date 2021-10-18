
import Routes from "./Routes";
import { BrowserRouter } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

/**FIXME 
 * Toggle between loading page
 * and then show dog list when data is recieved
 * 
 * state: isLoaded
*/
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [dogs, setDogs] = useState([]);//Question: Why does this have to be a state?

  async function getDogs() {
    const dogsData = await axios.get("http://localhost:5000/dogs");
    setDogs(dogsData.data);
    setIsLoaded(true);
  }
  
  if (!isLoaded) {
    getDogs();
    return <h1>Loading...</h1>
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * App
    * state: isLoaded
 *  Routes
 *    /Dogs
 *
 *     /Dogs/:name
 */