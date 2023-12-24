import "./SideContainer.scss";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const SideContainer = ({ children, onClick }: Props) => {
  return <aside onClick={onClick} className="side-pannel-container">{children}</aside>;
};

export default SideContainer;
