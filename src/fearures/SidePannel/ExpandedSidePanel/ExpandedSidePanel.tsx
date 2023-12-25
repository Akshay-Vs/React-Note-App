import AccountInfoLarge from "../../../components/AccountInfo/AccountInfoLarge";
import "./ExpandedSidePanel.scss";
import { useSetQuery } from "../../../hooks/useSetQuery";
import SearchBarSmall from "../../../components/SearchBar/searchBarSmall";
import IconButtonLarge from "../../../components/Button/IconButtonLarge/IconButtonLarge";
import ButtonPrimary from "../../../components/Button/ButtonPrimary";

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
      <div className="inputs">
        <SearchBarSmall />
        <div className="buttons">
          <IconButtonLarge
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <mask
                  id="mask0_15_102"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                >
                  <rect width="22" height="22" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_15_102)">
                  <path
                    d="M11 19.25C8.89167 19.25 7.05451 18.551 5.48854 17.1531C3.92257 15.7552 3.025 14.0097 2.79583 11.9167H4.675C4.88889 13.5056 5.59549 14.8194 6.79479 15.8583C7.9941 16.8972 9.39583 17.4167 11 17.4167C12.7875 17.4167 14.3038 16.7941 15.549 15.549C16.7941 14.3038 17.4167 12.7875 17.4167 11C17.4167 9.2125 16.7941 7.69618 15.549 6.45104C14.3038 5.2059 12.7875 4.58333 11 4.58333C9.94583 4.58333 8.96042 4.82778 8.04375 5.31667C7.12708 5.80556 6.35556 6.47778 5.72917 7.33333H8.25V9.16667H2.75V3.66667H4.58333V5.82083C5.3625 4.84306 6.31354 4.08681 7.43646 3.55208C8.55938 3.01736 9.74722 2.75 11 2.75C12.1458 2.75 13.2191 2.96771 14.2198 3.40313C15.2205 3.83854 16.0913 4.42674 16.8323 5.16771C17.5733 5.90868 18.1615 6.77951 18.5969 7.78021C19.0323 8.7809 19.25 9.85417 19.25 11C19.25 12.1458 19.0323 13.2191 18.5969 14.2198C18.1615 15.2205 17.5733 16.0913 16.8323 16.8323C16.0913 17.5733 15.2205 18.1615 14.2198 18.5969C13.2191 19.0323 12.1458 19.25 11 19.25ZM13.5667 14.85L10.0833 11.3667V6.41667H11.9167V10.6333L14.85 13.5667L13.5667 14.85Z"
                    fill="#3C3C3C"
                    fill-opacity="0.6"
                  />
                </g>
              </svg>
            }
            text="Recent"
            onClick={() => setQuery({ view: "recent" })}
          />

          <IconButtonLarge
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <mask
                  id="mask0_15_96"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <rect width="18" height="18" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_15_96)">
                  <path
                    d="M4.5 16.5C4.0875 16.5 3.73438 16.3531 3.44063 16.0594C3.14688 15.7656 3 15.4125 3 15V7.5C3 7.0875 3.14688 6.73438 3.44063 6.44063C3.73438 6.14687 4.0875 6 4.5 6H5.25V4.5C5.25 3.4625 5.61563 2.57812 6.34688 1.84687C7.07812 1.11562 7.9625 0.75 9 0.75C10.0375 0.75 10.9219 1.11562 11.6531 1.84687C12.3844 2.57812 12.75 3.4625 12.75 4.5V6H13.5C13.9125 6 14.2656 6.14687 14.5594 6.44063C14.8531 6.73438 15 7.0875 15 7.5V15C15 15.4125 14.8531 15.7656 14.5594 16.0594C14.2656 16.3531 13.9125 16.5 13.5 16.5H4.5ZM4.5 15H13.5V7.5H4.5V15ZM9 12.75C9.4125 12.75 9.76563 12.6031 10.0594 12.3094C10.3531 12.0156 10.5 11.6625 10.5 11.25C10.5 10.8375 10.3531 10.4844 10.0594 10.1906C9.76563 9.89688 9.4125 9.75 9 9.75C8.5875 9.75 8.23438 9.89688 7.94063 10.1906C7.64687 10.4844 7.5 10.8375 7.5 11.25C7.5 11.6625 7.64687 12.0156 7.94063 12.3094C8.23438 12.6031 8.5875 12.75 9 12.75ZM6.75 6H11.25V4.5C11.25 3.875 11.0312 3.34375 10.5938 2.90625C10.1562 2.46875 9.625 2.25 9 2.25C8.375 2.25 7.84375 2.46875 7.40625 2.90625C6.96875 3.34375 6.75 3.875 6.75 4.5V6Z"
                    fill="#3C3C3C"
                    fill-opacity="0.6"
                  />
                </g>
              </svg>
            }
            text="Private"
            onClick={() => setQuery({ view: "private" })}
          />

          <IconButtonLarge
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <mask
                  id="mask0_15_108"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <rect width="18" height="18" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_15_108)">
                  <path
                    d="M8.4375 15.75H5.25C4.8375 15.75 4.48438 15.6031 4.19062 15.3094C3.89687 15.0156 3.75 14.6625 3.75 14.25V4.5H3V3H6.75V2.25H11.25V3H15V4.5H14.25V7.725C14.0375 7.6625 13.7906 7.60938 13.5094 7.56563C13.2281 7.52187 12.975 7.5 12.75 7.5V4.5H5.25V14.25H7.725C7.8 14.5125 7.9 14.7719 8.025 15.0281C8.15 15.2844 8.2875 15.525 8.4375 15.75ZM6.75 12.75H7.5C7.5 11.9625 7.625 11.3156 7.875 10.8094L8.25 10.05V6H6.75V12.75ZM9.75 8.4375C9.9625 8.3 10.2031 8.1625 10.4719 8.025C10.7406 7.8875 11 7.7875 11.25 7.725V6H9.75V8.4375ZM12.75 16.5C11.7125 16.5 10.8281 16.1344 10.0969 15.4031C9.36563 14.6719 9 13.7875 9 12.75C9 11.7125 9.36563 10.8281 10.0969 10.0969C10.8281 9.36563 11.7125 9 12.75 9C13.7875 9 14.6719 9.36563 15.4031 10.0969C16.1344 10.8281 16.5 11.7125 16.5 12.75C16.5 13.7875 16.1344 14.6719 15.4031 15.4031C14.6719 16.1344 13.7875 16.5 12.75 16.5ZM13.9875 14.5125L14.5125 13.9875L13.125 12.6V10.5H12.375V12.9L13.9875 14.5125Z"
                    fill="#3C3C3C"
                    fill-opacity="0.6"
                  />
                </g>
              </svg>
            }
            onClick={() => setQuery({ view: "trash" })}
            text="Trash"
          />
        </div>
        <ButtonPrimary
          text="Create New"
          onClick={() => setQuery({ view: "new", name: "untitled" })}
        />
      </div>
    </div>
  );
};

export default ExpandedSidePanel;
