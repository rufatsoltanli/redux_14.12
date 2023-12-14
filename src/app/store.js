import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import counterReducer from '../features/counter/counterSlice'
import calculatorReducer from '../features/calculator/calculatorSlice'


export default configureStore({
    reducer: {
        calculator: calculatorReducer,
        todo: todoReducer,
        counter: counterReducer,
    },
})

