import { NavLink } from "react-router-dom";

const HomePage = () => {
    return(
        <ul>
            <li><NavLink to='/Products'>Products</NavLink></li>
            <li><NavLink to='/About'>About</NavLink></li>
            <li><NavLink to='/Cart'>Cart</NavLink></li>
            <li><NavLink to='/Auth'>Auth</NavLink></li>
            <li><NavLink to='/Profile'>Profile</NavLink></li>
        </ul>
    )
}

export default HomePage;