export default function ItemNav(props) {
  return (
    <li>
      <button type="button">
        {props.icone} <span>{props.texto}</span>
      </button>
    </li>
  )
}
