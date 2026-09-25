import ItemNav from '../components/ItemNav'

export default function NavDesktop() { 

    return(
    
        <nav className="desktop-nav" aria-label="Navegação móvel">
        <ul>
            <ItemNav icone = "Casa" texto = "Inicio" />
            <ItemNav icone = "Lupa" texto = "Pesquisar"/>
            <ItemNav icone = "Quadrado" texto = "Criar"/>
            <ItemNav icone = "Foto de Perfil" texto = "Perfil"/>
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

