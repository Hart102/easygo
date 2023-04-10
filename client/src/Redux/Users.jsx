import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name: "users",
    initialState: { value: '' },
    reducers: {
        addUser: (state, action) => { //User session and User logout
            if(action.payload === 'logout') {
                axios.post('http://localhost:5000/api/user_logout')
                state.value = ''
                window.location.reload()
            }
            state.value = action.payload
        },
        editEmail: (state, action) => { //Edit email function
            state.value = {
                ...state, 
                value: action.payload
            }
            axios.post(
                'http://localhost:5000/api/edit_email', {...state.value})
                .then(res => {
                console.log(res.data[0])
            })
        }
    }
})
export const { addUser, editEmail } = userSlice.actions
export default userSlice.reducer;