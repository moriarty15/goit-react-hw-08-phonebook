import { fetchRequest, postContact, deleteContact } from "../../DBworker/fetchRequest";
import { createAsyncThunk } from "@reduxjs/toolkit";
// import { fetchContactsSuccess, fetchContactsRequest, fetchContactsError } from "./contacts-actions";

export const fetchContactsAsyncThunk = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const contacts = await fetchRequest();
      return contacts.reverse();
    } catch (error) {
      alert(error);
    }
  }
);

export const addContactAsyncThunk = createAsyncThunk(
  "contacts/addContact",
    async (data) => {
        try {
      const contact = await postContact(data);
      return contact;
    } catch (error) {
      alert(error);
    }
  }
);

export const deleteContactAsyncThunk = createAsyncThunk(
    "contact/deleteContact",
    async (id) => {
        try {
            await deleteContact(id);
            return id;
        } catch (error) {
            alert(error)
        }
    }
)

// const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactsRequest())

//     try {
//         const contacts = await fetchRequest();
//         console.log(contacts)
//         dispatch(fetchContactsSuccess(contacts))

//     } catch (error) {
//         dispatch(fetchContactsError(error))
//     }

// }
// export default fetchContacts;
