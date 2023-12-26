import TopContainer from "../../layout/TopContainer";
import { useQuery } from "../../hooks/useQuery";
import BreadCrumbs from "./BreadCrumbs";

import "./TopNav.scss";

const TopNav = () => {
  const { view } = useQuery();
  return (
    <TopContainer>
      <div className="top-nav">
        <div className="flex-1">
          {view === "new" || view === "editor" ? (
            <BreadCrumbs />
          ) : (
            <div className="title">Note App</div>
          )}
        </div>
        <div className="flex-2">Info</div>
      </div>
    </TopContainer>
  );
};

export default TopNav;
