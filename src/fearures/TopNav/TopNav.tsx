import TopContainer from "../../layout/TopContainer";
import { useQuery } from "../../hooks/useQuery";
import BreadCrumbs from "./BreadCrumbs";
import Info from "./Info/Info";

import "./TopNav.scss";
import SearchBarLarge from "../../components/SearchBar/SearchBarLarge";

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
        <div className="flex-2">
            {view === "new" || view === "editor" ? <Info/>:<SearchBarLarge/>}
        </div>
      </div>
    </TopContainer>
  );
};

export default TopNav;
