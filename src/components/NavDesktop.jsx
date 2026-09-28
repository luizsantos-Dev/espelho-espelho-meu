import ItemNav from '../components/ItemNav'
import { FaHouse } from "react-icons/fa6";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPlusSquare } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function NavDesktop() { 

    return(
    
        <nav className="desktop-nav" aria-label="Navegação móvel">
        <ul>
            <ItemNav icone = {<FaHouse />} texto = "Inicio" />
            <ItemNav icone = {<FaMagnifyingGlass color='red' size="20px" />} texto = "Pesquisar"/>
            <ItemNav icone = {<FaPlusSquare />} texto = "Criar"/>
            <ItemNav icone = {<CgProfile />} texto = "Perfil"/>
        </ul>
            <button type="button" aria-label="Início">Inicio</button>
            <button type="button" aria-label="Pesquisar">Pesquisar</button>
            <button type="button" aria-label="Criar publicação">Criar</button>
            <button type="button" aria-label="Perfil">Perfil</button>
        </nav>
    )
}

function Bloco(){
    return <div></div>
}

function Linha(){
    return <div></div>
}

