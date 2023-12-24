import "./IconButton.scss"

interface Props {
    children: React.ReactNode;
    onClick?: () => void;
}

const IconButton = ({children, onClick}:Props) => {
  return <div onClick={onClick} className="icon-button">{children}</div>;
};

export default IconButton;
