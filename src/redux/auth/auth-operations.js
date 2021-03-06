import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
}

const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persisterToken = state.auth.token;
    if (persisterToken === null) {
        return thunkAPI.rejectWithValue();
    }
    token.set(persisterToken)
    try {
        const {data} = await axios.get('/users/current');
        return data;
        
    } catch (error) {
        
    }
    
})

const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const { data } = await axios.post('/users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        
    }
})

const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        
    }
})

const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('/users/logout');
        token.unset()
    } catch (error) {
        
    }
})



const operations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser,
}

export default operations;