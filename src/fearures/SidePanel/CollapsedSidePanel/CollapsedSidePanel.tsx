import IconButton from "../../../components/Button/IconButton/IconButton";
import "./CollapsedSidePanel.scss";
import { useSetQuery } from "../../../hooks/useSetQuery";
import AccountInfoSmall from "../../../components/AccountInfo/AccountInfoSmall/AccountInfoSmall";

const CollapsedSidePanel = () => {
  const setQuery = useSetQuery();
  return (
    <div className="collapsed-side-panel">
      <div className="top-icons">
        <IconButton onClick={() => setQuery({ isCollapsed: false })}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="rgba(60, 60, 60, 0.6)"
          >
            <mask
              id="mask0_33_157"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_33_157)">
              <path
                d="M3.75 22.5V20H26.25V22.5H3.75ZM3.75 16.25V13.75H26.25V16.25H3.75ZM3.75 10V7.5H26.25V10H3.75Z"
                fill="#3C3C3C"
                fill-opacity="0.6"
              />
            </g>
          </svg>
        </IconButton>

        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="rgba(60, 60, 60, 0.6)"
          >
            <path
              d="M27.6667 30L17.1667 19.5C16.3333 20.1667 15.375 20.6944 14.2917 21.0833C13.2083 21.4722 12.0556 21.6667 10.8333 21.6667C7.80556 21.6667 5.24306 20.6181 3.14583 18.5208C1.04861 16.4236 0 13.8611 0 10.8333C0 7.80556 1.04861 5.24306 3.14583 3.14583C5.24306 1.04861 7.80556 0 10.8333 0C13.8611 0 16.4236 1.04861 18.5208 3.14583C20.6181 5.24306 21.6667 7.80556 21.6667 10.8333C21.6667 12.0556 21.4722 13.2083 21.0833 14.2917C20.6944 15.375 20.1667 16.3333 19.5 17.1667L30 27.6667L27.6667 30ZM10.8333 18.3333C12.9167 18.3333 14.6875 17.6042 16.1458 16.1458C17.6042 14.6875 18.3333 12.9167 18.3333 10.8333C18.3333 8.75 17.6042 6.97917 16.1458 5.52083C14.6875 4.0625 12.9167 3.33333 10.8333 3.33333C8.75 3.33333 6.97917 4.0625 5.52083 5.52083C4.0625 6.97917 3.33333 8.75 3.33333 10.8333C3.33333 12.9167 4.0625 14.6875 5.52083 16.1458C6.97917 17.6042 8.75 18.3333 10.8333 18.3333Z"
              fill="#3C3C3C"
              fill-opacity="0.6"
            />
          </svg>
        </IconButton>

        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <mask
              id="mask0_33_139"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_33_139)">
              <path
                d="M15 26.25C12.125 26.25 9.61979 25.2969 7.48437 23.3906C5.34896 21.4844 4.125 19.1042 3.8125 16.25H6.375C6.66667 18.4167 7.63021 20.2083 9.26562 21.625C10.901 23.0417 12.8125 23.75 15 23.75C17.4375 23.75 19.5052 22.901 21.2031 21.2031C22.901 19.5052 23.75 17.4375 23.75 15C23.75 12.5625 22.901 10.4948 21.2031 8.79687C19.5052 7.09896 17.4375 6.25 15 6.25C13.5625 6.25 12.2188 6.58333 10.9688 7.25C9.71875 7.91667 8.66667 8.83333 7.8125 10H11.25V12.5H3.75V5H6.25V7.9375C7.3125 6.60417 8.60938 5.57292 10.1406 4.84375C11.6719 4.11458 13.2917 3.75 15 3.75C16.5625 3.75 18.026 4.04688 19.3906 4.64063C20.7552 5.23438 21.9427 6.03646 22.9531 7.04688C23.9635 8.05729 24.7656 9.24479 25.3594 10.6094C25.9531 11.974 26.25 13.4375 26.25 15C26.25 16.5625 25.9531 18.026 25.3594 19.3906C24.7656 20.7552 23.9635 21.9427 22.9531 22.9531C21.9427 23.9635 20.7552 24.7656 19.3906 25.3594C18.026 25.9531 16.5625 26.25 15 26.25ZM18.5 20.25L13.75 15.5V8.75H16.25V14.5L20.25 18.5L18.5 20.25Z"
                fill="#3C3C3C"
                fill-opacity="0.6"
              />
            </g>
          </svg>
        </IconButton>

        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <mask
              id="mask0_33_142"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_33_142)">
              <path
                d="M7.5 27.5C6.8125 27.5 6.22396 27.2552 5.73438 26.7656C5.24479 26.276 5 25.6875 5 25V12.5C5 11.8125 5.24479 11.224 5.73438 10.7344C6.22396 10.2448 6.8125 10 7.5 10H8.75V7.5C8.75 5.77083 9.35938 4.29688 10.5781 3.07812C11.7969 1.85937 13.2708 1.25 15 1.25C16.7292 1.25 18.2031 1.85937 19.4219 3.07812C20.6406 4.29688 21.25 5.77083 21.25 7.5V10H22.5C23.1875 10 23.776 10.2448 24.2656 10.7344C24.7552 11.224 25 11.8125 25 12.5V25C25 25.6875 24.7552 26.276 24.2656 26.7656C23.776 27.2552 23.1875 27.5 22.5 27.5H7.5ZM7.5 25H22.5V12.5H7.5V25ZM15 21.25C15.6875 21.25 16.276 21.0052 16.7656 20.5156C17.2552 20.026 17.5 19.4375 17.5 18.75C17.5 18.0625 17.2552 17.474 16.7656 16.9844C16.276 16.4948 15.6875 16.25 15 16.25C14.3125 16.25 13.724 16.4948 13.2344 16.9844C12.7448 17.474 12.5 18.0625 12.5 18.75C12.5 19.4375 12.7448 20.026 13.2344 20.5156C13.724 21.0052 14.3125 21.25 15 21.25ZM11.25 10H18.75V7.5C18.75 6.45833 18.3854 5.57292 17.6562 4.84375C16.9271 4.11458 16.0417 3.75 15 3.75C13.9583 3.75 13.0729 4.11458 12.3438 4.84375C11.6146 5.57292 11.25 6.45833 11.25 7.5V10Z"
                fill="#3C3C3C"
                fill-opacity="0.6"
              />
            </g>
          </svg>
        </IconButton>
        <IconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <mask
              id="mask0_33_145"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="30"
              height="30"
            >
              <rect width="30" height="30" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_33_145)">
              <path
                d="M14.0625 26.25H8.75C8.0625 26.25 7.47396 26.0052 6.98437 25.5156C6.49479 25.026 6.25 24.4375 6.25 23.75V7.5H5V5H11.25V3.75H18.75V5H25V7.5H23.75V12.875C23.3958 12.7708 22.9844 12.6823 22.5156 12.6094C22.0469 12.5365 21.625 12.5 21.25 12.5V7.5H8.75V23.75H12.875C13 24.1875 13.1667 24.6198 13.375 25.0469C13.5833 25.474 13.8125 25.875 14.0625 26.25ZM11.25 21.25H12.5C12.5 19.9375 12.7083 18.8594 13.125 18.0156L13.75 16.75V10H11.25V21.25ZM16.25 14.0625C16.6042 13.8333 17.0052 13.6042 17.4531 13.375C17.901 13.1458 18.3333 12.9792 18.75 12.875V10H16.25V14.0625ZM21.25 27.5C19.5208 27.5 18.0469 26.8906 16.8281 25.6719C15.6094 24.4531 15 22.9792 15 21.25C15 19.5208 15.6094 18.0469 16.8281 16.8281C18.0469 15.6094 19.5208 15 21.25 15C22.9792 15 24.4531 15.6094 25.6719 16.8281C26.8906 18.0469 27.5 19.5208 27.5 21.25C27.5 22.9792 26.8906 24.4531 25.6719 25.6719C24.4531 26.8906 22.9792 27.5 21.25 27.5ZM23.3125 24.1875L24.1875 23.3125L21.875 21V17.5H20.625V21.5L23.3125 24.1875Z"
                fill="#3C3C3C"
                fill-opacity="0.6"
              />
            </g>
          </svg>
        </IconButton>

        <div className="bottom-buttons">
          <AccountInfoSmall />
        </div>
      </div>
    </div>
  );
};

export default CollapsedSidePanel;
