import React, { useState } from 'react'
import { plus, minus, multiply, divide } from './calculatorSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Calculator() {
    const calculator = useSelector((state) => state.calculator.value)
    const dispatch = useDispatch()
    const [calculatorNums, setCalculatorNums] = useState([])
    const [inputNum1, setInputNum1] = useState('')
    const [inputNum2, setInputNum2] = useState('')

    return (
        <div>
            <h1>Result</h1>
            <div className='calcRes'>{calculator}</div>
            <h3>Enter num1</h3>
            <input type="text" value={inputNum1} onChange={(e) => setInputNum1(e.target.value)} />
            <h3>Enter num2</h3>
            <input type="text" value={inputNum2} onChange={(e) => setInputNum2(e.target.value)} />
            <h1>Choose operation</h1>
            <button onClick={() => { setCalculatorNums([inputNum1, inputNum2]); dispatch(plus(calculatorNums)) }}>+</button>
            <button onClick={() => { setCalculatorNums([inputNum1, inputNum2]); dispatch(minus(calculatorNums)) }}>-</button>
            <button onClick={() => { setCalculatorNums([inputNum1, inputNum2]); dispatch(multiply(calculatorNums)) }}>*</button>
            <button onClick={() => { setCalculatorNums([inputNum1, inputNum2]); dispatch(divide(calculatorNums)) }}>/</button>

        </div>
    )
}