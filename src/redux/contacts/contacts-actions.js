import { createAction } from "@reduxjs/toolkit";
import { DELETECONTACT, FILTER } from "./contacts-types"

//pending, fullfilled, rejected
// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
// export const fetchContactsError = createAction('contacts/fetchContactsError');

// export const addContact = createAction(
//   ADDCONTACT,
//   ({ name, number }) => {
//     return {
//       payload: {
//         name,
//         number,
//       },
//     };
//   }
// );

export const deleteContact = createAction(DELETECONTACT);
export const handleFilterChange = createAction(FILTER);
