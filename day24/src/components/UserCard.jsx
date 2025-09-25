import React from 'react'

export default function UserCard({ name, email, role }) {
  return (
    <div className="usercard card">
      <h3>{name}</h3>
      <p>{email}</p>
      <small>{role}</small>
    </div>
  )
}
