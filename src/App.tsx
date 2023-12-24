import MainContainer from "./layout/MainContainer";
import SidePannel from "./fearures/SidePannel";
import TopContainer from "./layout/TopContainer";


const App = () => {

  return (
    <div>
      <SidePannel />
      <TopContainer>Top Pannel</TopContainer>
      <MainContainer> Main Pannel</MainContainer>
    </div>
  );
};

export default App;
