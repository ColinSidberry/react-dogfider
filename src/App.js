import { useState } from "react";
import Routes from "./Routes";
import NavBar from "./NavBar";
import { BrowserRouter, NavLink } from 'react-router-dom';

/**FIXME 
 * Toggle between loading page
 * and then show dog list when data is recieved
 * 
 * state: isLoaded
*/
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  function toggleIsLoaded(paramToBeDecided) {
    //some condition that checks the ajax
      //if promise reolved
        //setIsLoaded(true);
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes isLoaded={isLoaded} toggleIsLoaded={toggleIsLoaded} />
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