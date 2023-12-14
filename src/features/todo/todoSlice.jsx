import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: [],
    },
    reducers: {
        addToTodo: (state, action) => {
            console.log(state.value);
            console.log(action.payload);
            state.value.push(action.payload)
        },
        removeFromTodo: (state, action) => {
            state.value = state.value.filter((x) => x.id !== action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToTodo, removeFromTodo } = todoSlice.actions

export default todoSlice.reducer