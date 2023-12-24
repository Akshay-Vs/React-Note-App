type Props = {
    onClick: () => void
    text: string
}

const CreateNewButton = ({text, onClick}: Props) => {
  return (
    <button className='create-new-button' onClick={onClick}>
        {text}
    </button>
  )
}

export default CreateNewButton