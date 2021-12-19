import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/auth/auth-operations";

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
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
    dispatch(operations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          email:
          <input  type="email" name="email" value={email} onChange={handleChange}  />
        </label>
        <label>
          password
          <input  type="password" name="password" value={password} onChange={handleChange}  />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </>
  );
}
