import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
}

const counterSlice = createSlice({

    name: "counter",
    initialState,
    reducers: {

        //increment
        incremented(state) {
            state.value++;
        },

        //decrement
        decremented(state) {
            state.value--;
        },

        //reset
        reset(state) {
            state.value = initialState.value;
        },

        amountAdded(state, action: PayloadAction<number>) {
            state.value += action.payload;
        }
    }
})

export const { incremented, decremented, reset, amountAdded } = counterSlice.actions;

export default counterSlice.reducer;