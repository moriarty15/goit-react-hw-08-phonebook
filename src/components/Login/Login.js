import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/auth/auth-operations";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h3>Страница логина</h3>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Email:
          <input
            className="input"            
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label  className="label">
          Password:
          <input
            className="input"            
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
              </label>
              <button type="submit" className="add__button">Войти</button>
      </form>
    </div>
  );
}
