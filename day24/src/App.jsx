import React from 'react'
import Counter from './components/Counter'
import FetchPosts from './components/FetchPosts'
import UserCard from './components/UserCard'

export default function App() {
  const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Student' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Teacher' },
  ]

  return (
    <div className="app">
      <h1>Day 24 — Rest & Review Mini App</h1>

      <section>
        <Counter />
      </section>

      <section>
        <FetchPosts />
      </section>

      <section className="card">
        <h2>Props — User Cards</h2>
        <div className="cards">
          {users.map((u) => (
            <UserCard key={u.id} name={u.name} email={u.email} role={u.role} />
          ))}
        </div>
      </section>
    </div>
  )
}
