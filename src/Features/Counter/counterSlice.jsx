import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    loading: false,
    error: null,
};

// Async thunk to simulate an API call for incrementing by an amount
export const incrementByAmountAsync = createAsyncThunk(
    'counter/incrementByAmountAsync',
    async (amount) => {
        // Simulating a delay (e.g., an API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(amount);
            }, 1000);
        });
    }
);

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        resetAmount: (state) => {
            state.value = initialState.value;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementByAmountAsync.pending, (state) => {
                state.loading = true; // Set loading state
            })
            .addCase(incrementByAmountAsync.fulfilled, (state, action) => {
                state.value += action.payload; // Update value with payload
                state.loading = false; // Reset loading state
            })
            .addCase(incrementByAmountAsync.rejected, (state, action) => {
                state.loading = false; // Reset loading state
                state.error = action.error.message; // Capture error message
            });
    },
});

export const { increment, decrement, resetAmount } = counterSlice.actions;
export default counterSlice.reducer;
