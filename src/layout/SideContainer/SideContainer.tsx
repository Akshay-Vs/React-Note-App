import "./SideContainer.scss";
import { useQuery } from "../../hooks/useQuery";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const SideContainer = ({ children, onClick }: Props) => {
  const { isCollapsed } = useQuery();
  return (
    <aside
      onClick={onClick}
      className={`side-pannel-container ${
        isCollapsed === "true" ? "collapsed" : "expanded"
      }`}
    >
      {children}
    </aside>
  );
};

export default SideContainer;
