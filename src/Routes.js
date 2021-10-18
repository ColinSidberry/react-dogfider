import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";

/**Renders Routes
 * 
 * Props:
 *  - dogs: [{name, src, age, facts:[fact, ...] }, ..]
 * 
 * State: 
 *  - None
 * 
 * App->Routes->(DogList, DogDetails)
*/

function Routes({ dogs }) {
    // console.log("route dogs", dogs) //Works
    return (
        <div>
            <Switch>
                <Route exact path="/dogs">
                    <DogList dogs={dogs} />
                </Route>
                <Route exact path="/dogs/:name">
                    <DogDetails dogs={dogs} />
                </Route>
                <Redirect to="/dogs" />
            </Switch>

        </div>
    )
}

export default Routes;