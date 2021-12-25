import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <NavLink to="/" exact className={"AuthNav__link"}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" exact className={"AuthNav__link"} >
          Contacts
        </NavLink>
      )}
    </>
  );
}
