import SideContainer from "../../layout/SideContainer";
import CollapsedSidePanel from "./CollapsedSidePanel/CollapsedSidePanel";
import ExpandedSidePanel from "./ExpandedSidePanel/ExpandedSidePanel";

import { useQuery } from "../../hooks/useQuery";

const SidePanel = () => {
  const { isCollapsed } = useQuery();

  return (
    <SideContainer>
      {isCollapsed === "true" ? <CollapsedSidePanel/> : <ExpandedSidePanel />}
    </SideContainer>
  );
};

export default SidePanel;
