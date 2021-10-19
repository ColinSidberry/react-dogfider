
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

import Routes from "./Routes";
import NavBar from "./NavBar";

const BASE_URL = "http://localhost:5000/dogs";
/**Renders NavBar and Routes
 * 
 * Props:
 *  - None
 * 
 * State: 
 * - isLoaded
 * - dogs
 * 
 * App->(NavBar, Routes)
*/
function App() {
  const [needsLoading, setneedsLoading] = useState(true);
  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const dogsData = await axios.get(BASE_URL);
    console.log("data", dogsData)
    setDogs(dogsData.data);

  }

  if (needsLoading) {
    setneedsLoading(false);
    getDogs();
  }

  if (dogs.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <NavBar dogs={dogs} />
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}


export default App;