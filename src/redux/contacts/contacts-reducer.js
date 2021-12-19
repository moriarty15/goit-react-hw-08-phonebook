import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import { fetchContactsSuccess, fetchContactsError, fetchContactsRequest } from "./contacts-actions";
import { handleFilterChange } from "./contacts-actions";
import { fetchContactsAsyncThunk, addContactAsyncThunk, deleteContactAsyncThunk } from "./contacts-operations";



const itemsReducer = createReducer([], {
    [fetchContactsAsyncThunk.fulfilled]: (_, action) => {
        return action.payload
    },
    [addContactAsyncThunk.fulfilled]: (state, action) => {
        return [action.payload ,...state]
    },
    [deleteContactAsyncThunk.fulfilled]: (state, action) => {
        return state = state.filter((item) => item.id !== action.payload)
    },
    // [addContactAsyncThunk.fulfilled]: 
    // [addContact]: (state, { payload }) => {
    //     if (state.some((e) => e.name.includes(payload.name))) {
    //     alert(`${payload.name} is already in contacts`);
    //     return state;
    //     }
    //     return [payload, ...state];
    // },
    // [deleteContact]: (state, { payload }) => {
    //     state = state.filter((item) => item.id !== payload);
    //     return state
    // }
})

const filterReducer = createReducer("", {
    [handleFilterChange]: (_, { payload }) => {
        return payload;
    }
})

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
})

// const itemsReducerSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         item: [],
//         filter: "",
//         extraReducers: {
//             [fetchContactsAsyncThunk.fulfilled]: (state, action) => {
//                 return {
//                     ...state,
//                     items: action.payload,
//                 };
//             },
//         },

//     }
// })