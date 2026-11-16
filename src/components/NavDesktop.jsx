import ItemNav from '../components/ItemNav'
import { FaHouse, FaMagnifyingGlass } from 'react-icons/fa6'
import { FaPlusSquare } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

// Menu lateral que só aparece em telas grandes
export default function NavDesktop() {
  return (
    <nav className="desktop-nav" aria-label="Menu lateral">
      <ul>
        <ItemNav icone={<FaHouse />} texto="Início" />
        <ItemNav icone={<FaMagnifyingGlass />} texto="Pesquisar" />
        <ItemNav icone={<FaPlusSquare />} texto="Criar" />
        <ItemNav icone={<CgProfile />} texto="Perfil" />
      </ul>
    </nav>
  )
}
