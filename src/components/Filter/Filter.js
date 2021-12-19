import { useSelector, useDispatch } from "react-redux";
import { handleFilterChange } from "../../redux/contacts/contacts-actions";

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(handleFilterChange(e.target.value))}
        placeholder="Enter search name"
      />
    </label>
  );
};

export default Filter;

