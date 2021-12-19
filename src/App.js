import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";
import Container from "./components/Container";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./components/HomePage/HomePage";
import NotFoundView from "./components/NotFoundView";
import Register from "./components/Register";
import Login from "./components/Login";
import UserMenu from "./components/UserMenu";
import { Switch, Route } from "react-router";

function App() {
  return (
    <Container>
      <Navigation />
      <UserMenu/>
      <h1>Phonebook</h1>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/contacts" exact>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
