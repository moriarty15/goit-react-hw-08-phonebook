import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/auth/auth-operations";
import authSelectors from "../../redux/auth/auth-selector";


export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    return (
        <>
            <h3>UserEmail</h3>
            <button>Logout</button>
        </>
    )
}