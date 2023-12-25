import "./IconButtonLarge.scss";

interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
  text: string;
}
const IconButtonLarge = ({ icon, text, onClick }: Props) => {
  return (
    <div onClick={onClick} className="icon-button-large">
      {icon}
      <h1>{text}</h1>
    </div>
  );
};

export default IconButtonLarge;
