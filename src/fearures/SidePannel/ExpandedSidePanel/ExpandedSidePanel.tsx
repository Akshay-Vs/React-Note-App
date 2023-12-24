import AccountInfoLarge from "../../../components/AccountInfo/AccountInfoLarge";
import "./ExpandedSidePanel.scss";
import { useSetQuery } from "../../../hooks/useSetQuery";

const ExpandedSidePanel = () => {
  const setQuery = useSetQuery();
  return (
    <div className="expanded-side-panel">
      <div className="top">
        <AccountInfoLarge />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          onClick={() => setQuery({ isCollapsed: true })}
        >
          <path
            d="M13.5 13V5L9.5 9L13.5 13ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM5 16V2H2V16H5ZM7 16H16V2H7V16Z"
            fill="#3C3C3C"
            fill-opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
};

export default ExpandedSidePanel;
