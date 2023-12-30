import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://658e725b2871a9866e792e56.mockapi.io';

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const resp = await axios.get('/contacts')
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addContactBase = createAsyncThunk(
    "contacts/addContact",
    async (obj, thunkAPI) => {
        try {
            const resp = await axios.post('/contacts', obj);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (contactId, thunkAPI) => {
        try {
            const resp = await axios.delete(`/contacts/${contactId}`);
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)