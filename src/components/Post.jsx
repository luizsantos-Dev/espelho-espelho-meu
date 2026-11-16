import { useRef, useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FiBookmark, FiHeart, FiMessageCircle, FiMoreHorizontal, FiSend } from 'react-icons/fi'

function Post({ post }) {
  // curtida: se está curtido e quantas curtidas tem
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  // comentários: a lista e o texto que está sendo digitado
  const [comments, setComments] = useState(post.comments)
  const [texto, setTexto] = useState('')
  const campoComentario = useRef(null) // para o botão de comentar levar ao campo

  function curtir() {
    if (liked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setLiked(!liked)
  }

  function comentar(evento) {
    evento.preventDefault()
    if (texto.trim() === '') return
    setComments([...comments, { user: 'voce.ovinho', text: texto }])
    setTexto('')
  }

  return (
    <article className="post">
      <header className="post__header">
        <img className="post__avatar" src={post.avatar} alt={`Foto de ${post.user}`} />
        <div className="post__user">
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>
        <button className="icon-button post__more" type="button" aria-label="Mais opções">
          <FiMoreHorizontal />
        </button>
      </header>

      <img className="post__image" src={post.image} alt={post.alt} onDoubleClick={() => !liked && curtir()} />

      <div className="post__content">
        <div className="post__actions">
          <button
            className={liked ? 'icon-button curtido' : 'icon-button'}
            type="button"
            aria-label={liked ? 'Descurtir' : 'Curtir'}
            aria-pressed={liked}
            onClick={curtir}
          >
            {liked ? <FaHeart /> : <FiHeart />}
          </button>
          <button className="icon-button" type="button" aria-label="Comentar" onClick={() => campoComentario.current.focus()}>
            <FiMessageCircle />
          </button>
          <button className="icon-button" type="button" aria-label="Enviar">
            <FiSend />
          </button>
          <button className="icon-button" type="button" aria-label="Salvar">
            <FiBookmark />
          </button>
        </div>

        <p className="post__likes"><strong>{likes.toLocaleString('pt-BR')} curtidas</strong></p>
        <p className="post__caption"><strong>{post.user}</strong>{post.caption}</p>

        <ul className="post__comments">
          {comments.map((comment, index) => (
            <li key={index}><strong>{comment.user}</strong>{comment.text}</li>
          ))}
        </ul>

        <form className="post__form" onSubmit={comentar}>
          <label className="visually-hidden" htmlFor={`comentario-${post.id}`}>Adicionar comentário</label>
          <input
            id={`comentario-${post.id}`}
            ref={campoComentario}
            type="text"
            placeholder="Adicione um comentário..."
            value={texto}
            onChange={(evento) => setTexto(evento.target.value)}
          />
          <button type="submit" disabled={texto.trim() === ''}>Publicar</button>
        </form>
      </div>
    </article>
  )
}

export default Post
