import React from 'react'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button onClick={() => dispatch(incrementByAmount(15))}>+15</button>
            </div>
        </div>
    )
}