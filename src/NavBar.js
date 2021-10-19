import { NavLink } from "react-router-dom";
import "./NavBar.css";
/**Renders NavLinks
 * 
 * Props:
 *  - dogs: [{name, src, age, facts:[fact, ...] }, ..]
 * 
 * State: 
 *  - None
 * 
 * App->NavBar
*/
function NavBar({ dogs }) {
    return (
        <nav className="NavBar">
            <NavLink exact to="/dogs" >Home</NavLink>
            {dogs.map(dog =>
                <NavLink key={dog.name} exact to={`/dogs/${dog.name}`}>
                    {dog.name}
                </NavLink>
            )}
        </nav>
    );
}

export default NavBar;