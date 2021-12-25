import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <NavLink to="/" exact>
        HomePage
      </NavLink>
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    </>
  );
}
