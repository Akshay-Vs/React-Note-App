import MainContainer from "../../layout/MainContainer";
import Home from "./Home";
import { useQuery } from "../../hooks/useQuery";
import Editor from "../Editor";

const MainPanel = () => {
  const { view } = useQuery();
  return (
    <MainContainer>
      {view === "new" || view == "editor" ? <Editor /> : <Home />}
    </MainContainer>
  );
};

export default MainPanel;
