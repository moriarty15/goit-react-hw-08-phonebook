import { useSelector } from "react-redux";
import UserMenu from "./UserMenu";
import AuthNav from "./AuthNav";
import Navigation from "./Navigation/Navigation";
import authSelectors from "../redux/auth/auth-selector";

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <h1>Phonebook</h1>
    </>
  );
}
