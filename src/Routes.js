import { Switch, Route, Redirect } from "react-router-dom";
import DogDetails from "./DogDetails";
import Doglist from "./Doglist";


function Routes({ dogs }) {
    console.log("route dogs", dogs)
    return (
        <div>
            <Switch>
                <Route exact path="/dogs">
                    <Doglist dogs={dogs} />
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