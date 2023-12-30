import {createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContactBase, deleteContacts } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
};
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContactBase.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContactBase.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContactBase.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(item => item.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;