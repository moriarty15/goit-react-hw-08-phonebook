import { NavLink } from "react-router-dom";
import "./AuthNav.scss";

export default function AuthNav() {
    return (
        <div className="AuthNav__container">
            <NavLink
                className={"AuthNav__link"}
                to="/register"
                exact
                activeClassName="AuthNav__link__active"
            >
                Регистрация
            </NavLink>
            <NavLink
                className={"AuthNav__link"}                
                to="/login"
                exact
                activeClassName="AuthNav__link__active"
            >
                Логин
            </NavLink>
            
        </div>
    )
}