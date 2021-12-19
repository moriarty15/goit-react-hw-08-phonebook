import React from "react";
import { useEffect } from "react";
import "./ContactList.scss";
import ContactListItem from "./ContactListItem";
import { useSelector, useDispatch } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contacts-selector";
import {fetchContactsAsyncThunk} from "../../redux/contacts/contacts-operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  useEffect(() => {
    dispatch(fetchContactsAsyncThunk())
  }, [dispatch])
  return (
    <>
      {" "}
      {contacts.length > 0 && (
        <ul className="Contact__list">
          {contacts.map(({ id, name, Phone }) => {
            return (
              <li key={id} className="Contact__item">
                <ContactListItem name={name} number={Phone} id={id} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ContactList;
