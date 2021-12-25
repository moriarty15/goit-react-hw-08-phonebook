import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import operations from "../../redux/auth/auth-operations";


export default function UserMenu() {
    const dispatch = useDispatch();
    const UserName = useSelector(authSelectors.getUserName)
    return (
        <>
            {UserName && <h3>Hello {UserName}!</h3>}
            <button type="button" onClick={()=>dispatch(operations.logOut())}>Logout</button>
        </>
    )
}