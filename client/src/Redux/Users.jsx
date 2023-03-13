import { createSlice } from "@reduxjs/toolkit";
import { Data } from "../component/DataManager/PostData";

let userData;
const session = async() => {
    userData = await Data().RecieveData()
    return userData
}

export const userSlice = createSlice({
    name: "users",
    initialState: { value: userData },
    reducers: {
        addUser: (state, action) => {
            state.value = action.payload
        }
    }
})
export const { addUser } = userSlice.actions
export default userSlice.reducer;