import PropTypes from 'prop-types'
import { useDispatch} from "react-redux";
// import { deleteContact } from '../../redux/contacts/contacts-actions';
import { deleteContactAsyncThunk } from '../../redux/contacts/contacts-operations';

export default function ContactListItem(props) {
  const dispatch = useDispatch();

  const { name, number, id } = props;
  return (
    <>
      <span>{name}: </span>
      <span>{number} </span>
      <button
        className="button__delete"
        type="button"
        onClick={() => dispatch(deleteContactAsyncThunk(id))}
      >
        delete
      </button>
    </>
  );
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}