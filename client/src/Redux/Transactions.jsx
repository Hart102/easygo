import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: "transaction",
    initialState: { value: '' },
    reducers: {// get all transactions
        getAllTransaction: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { getAllTransaction } = transactionSlice.actions
export default transactionSlice.reducer;