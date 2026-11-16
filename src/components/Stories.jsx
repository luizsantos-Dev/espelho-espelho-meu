import { useState } from 'react'

// Lista de stories. Clicar marca o story como visto (a borda fica cinza).
function Stories({ posts }) {
  const [vistos, setVistos] = useState([])

  function verStory(user) {
    if (!vistos.includes(user)) {
      setVistos([...vistos, user])
    }
  }

  return (
    <section className="stories" aria-label="Stories">
      {posts.map((post) => (
        <button
          key={post.id}
          type="button"
          className={vistos.includes(post.user) ? 'story story--visto' : 'story'}
          onClick={() => verStory(post.user)}
        >
          <img src={post.avatar} alt="" />
          <span>{post.user}</span>
        </button>
      ))}
    </section>
  )
}

export default Stories
