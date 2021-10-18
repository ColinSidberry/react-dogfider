
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

import Routes from "./Routes";
import NavBar from "./NavBar";

/**Renders NavBar and Routes
 * 
 * Props:
 *  - None
 * 
 * State: 
 *  - isLoaded
 * 
 * App->(NavBar, Routes)
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
        <NavBar dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;