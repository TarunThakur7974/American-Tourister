import { createAsyncThunk } from "@reduxjs/toolkit";
import Services from "./Services";

export const login = createAsyncThunk('LOGIN', (formData, thunkApi) => {
    try {
        return Services.Login(formData)
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
})
export const signin = createAsyncThunk('SIGNIN', (formData, thunkApi) => {
    try {
        return Services.Signin(formData)
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
})

