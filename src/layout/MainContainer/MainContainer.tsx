import "./MainContainer.scss";
import { useQuery } from "../../hooks/useQuery";

interface Props {
  children: React.ReactNode;
}

const MainContainer = ({ children }: Props) => {
  const { isCollapsed } = useQuery();

  return (
    <main
      className={`main-container ${
        isCollapsed === "true" ? "collapsed" : "expanded"
      }`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
