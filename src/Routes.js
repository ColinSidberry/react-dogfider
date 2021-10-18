import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import DogList from "./DogList";


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