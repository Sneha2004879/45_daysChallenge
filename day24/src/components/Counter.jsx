import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  const inc = () => setCount((c) => c + 1)
  const dec = () => setCount((c) => c - 1)

  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="counter">
        <button onClick={dec} aria-label="decrement">-</button>
        <span className="count">{count}</span>
        <button onClick={inc} aria-label="increment">+</button>
      </div>
      <p>Current value: <strong>{count}</strong></p>
    </div>
  )
}
