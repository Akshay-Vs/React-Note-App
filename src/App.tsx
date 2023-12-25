import SidePannel from "./fearures/SidePanel";
import MainPanel from "./fearures/MainPanel";
import TopContainer from "./layout/TopContainer";

const App = () => {
  return (
    <div>
      <SidePannel />
      <TopContainer>Top Pannel</TopContainer>
      <MainPanel />
    </div>
  );
};

export default App;
