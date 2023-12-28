import SidePannel from "./fearures/SidePanel";
import MainPanel from "./fearures/MainPanel";
import TopNav from "./fearures/TopNav";
import SignInPage from "./components/SignInPage";

import { SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
  return (
    <>
      <SignedIn>
        <SidePannel />
        <TopNav />
        <MainPanel />
      </SignedIn>
      <SignedOut>
        <SignInPage />
      </SignedOut>
    </>
  );
};

export default App;
