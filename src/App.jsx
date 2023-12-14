import { useState } from 'react'
import './App.css'
import { Counter } from './features/counter/counter'
import { Todo } from './features/todo/todo'
import { Calculator } from './features/calculator/calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todo /> */}
      {/* <Counter /> */}
      <Calculator />
    </>
  )
}

export default App
