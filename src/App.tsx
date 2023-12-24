import MainContainer from "./layout/MainContainer";
import SideContainer from "./layout/SideContainer";
import TopContainer from "./layout/TopContainer";

import { useState } from "react";

const App = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toogleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <SideContainer onClick={toogleCollapse}>Side Pannel</SideContainer>
      <TopContainer isCollapsed={isCollapsed}>Top Pannel</TopContainer>
      <MainContainer isCollapsed={isCollapsed}> Main Pannel</MainContainer>
    </div>
  );
};

export default App;
