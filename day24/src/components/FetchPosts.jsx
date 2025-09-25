import React, { useEffect, useState, useMemo } from 'react'

export default function FetchPosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    const controller = new AbortController()
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          signal: controller.signal,
        })
        if (!res.ok) throw new Error('Network response not ok')
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [])

  const visible = useMemo(() => posts.slice(0, limit), [posts, limit])

  if (loading) {
    return (
      <div className="card">
        <h2>Posts</h2>
        <p>Loading...</p>
      </div>
    )
  }
  if (error) {
    return (
      <div className="card">
        <h2>Posts</h2>
        <p className="error">Error: {error}</p>
      </div>
    )
  }
  if (!posts || posts.length === 0) {
    return (
      <div className="card">
        <h2>Posts</h2>
        <p>No results found.</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>Posts (showing first {limit})</h2>
      <label>
        Show:
        <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </label>

      <ul>
        {visible.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
