import { login, signin } from './ExtraReducerFunction'

export const extraReducers = (builder) => {
    builder.addCase(login.pending, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    })
    builder.addCase(login.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            User: action.payload
        }
    })
    builder.addCase(login.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    })
    builder.addCase(signin.pending, (state, action) => {
        return {
            ...state,
            isLoading: true
        }
    })
    builder.addCase(signin.fulfilled, (state, action) => {
        return {
            ...state,
            isLoading: false,
            User: action.payload
        }
    })
    builder.addCase(signin.rejected, (state, action) => {
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    })
}

export default extraReducers;