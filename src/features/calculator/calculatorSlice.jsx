import { createSlice } from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        value: null,
    },
    reducers: {
        plus: (state, action) => {
            state.value = action.payload.reduce((num1, num2) => (+num1 + +num2))
        },
        minus: (state, action) => {
            state.value = action.payload.reduce((num1, num2) => (num1 - num2))
        }
        ,
        multiply: (state, action) => {
            state.value = action.payload.reduce((num1, num2) => (num1 * num2))
        },
        divide: (state, action) => {
            if (action.payload[1] === 0) {
                state.value = "cant divide to 0";
            }
            else {
                state.value = action.payload.reduce((num1, num2) => (num1 / num2))
            }
        }
    },
})

export const { plus, minus, multiply, divide } = calculatorSlice.actions

export default calculatorSlice.reducer