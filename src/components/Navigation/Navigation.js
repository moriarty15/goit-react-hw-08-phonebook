import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <NavLink to="/" exact>
                HomePage
            </NavLink>
            <NavLink to="/login"  exact>
                Login
            </NavLink>
            <NavLink to="/register"  exact>
                Register
            </NavLink>
            <NavLink to="/contacts"  exact>
                Contacts
            </NavLink>
            
            
        </>
    )
}