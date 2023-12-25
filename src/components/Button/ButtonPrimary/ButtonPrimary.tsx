import "./ButtonPrimary.scss"
type Props = {
    onClick: () => void
    text: string
}

const ButtonPrimary = ({text, onClick}: Props) => {
  return (
    <button className='create-new-button' onClick={onClick}>
        {text}
    </button>
  )
}

export default ButtonPrimary