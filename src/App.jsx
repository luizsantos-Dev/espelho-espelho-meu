// Icones do Header
import { FiHeart, FiHome, FiPlusSquare, FiSearch, FiUser } from 'react-icons/fi' 

// Header
import Header from './components/Header' 

// Navegação 
import Navegacao from './components/NavDesktop'

import Post from './components/Post'
import posts from './data/posts.json'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Navegacao />
      
      <main className="feed" aria-label="Feed de publicações">
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </main>
      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button type="button" aria-label="Início"><FiHome /></button>
        <button type="button" aria-label="Pesquisar"><FiSearch /></button>
        <button type="button" aria-label="Criar publicação"><FiPlusSquare /></button>
        <button type="button" aria-label="Atividades"><FiHeart /></button>
        <button type="button" aria-label="Perfil"><FiUser /></button>
      </nav>

      <Navegacao />
    </div>
  )
}

export default App
