import React, { useState } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";

import "./Info.scss";

const Info = () => {
  const setQuery = useSetQuery();
  const [currentSize, setCurrentSize] = useState(16);
  const fontSizes = Array.from({ length: 89 }, (_, i) => i + 12);

  const handleFontChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSize(Number(event.target.value));
    setQuery({ size: event.target.value });
  };

  const visibleSizes = fontSizes.filter(
    (size) => size >= currentSize - 6 && size <= currentSize + 6
  );
  const handleFontFamilyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuery({ family: event.target.value });
  };
  return (
    <div className="info-container">
      <div className="status">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_15_52"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_15_52)">
            <path
              d="M10.35 17L16 11.35L14.55 9.9L10.325 14.125L8.225 12.025L6.8 13.45L10.35 17ZM6.5 20C4.98333 20 3.6875 19.475 2.6125 18.425C1.5375 17.375 1 16.0917 1 14.575C1 13.275 1.39167 12.1167 2.175 11.1C2.95833 10.0833 3.98333 9.43333 5.25 9.15C5.66667 7.61667 6.5 6.375 7.75 5.425C9 4.475 10.4167 4 12 4C13.95 4 15.6042 4.67917 16.9625 6.0375C18.3208 7.39583 19 9.05 19 11C20.15 11.1333 21.1042 11.6292 21.8625 12.4875C22.6208 13.3458 23 14.35 23 15.5C23 16.75 22.5625 17.8125 21.6875 18.6875C20.8125 19.5625 19.75 20 18.5 20H6.5ZM6.5 18H18.5C19.2 18 19.7917 17.7583 20.275 17.275C20.7583 16.7917 21 16.2 21 15.5C21 14.8 20.7583 14.2083 20.275 13.725C19.7917 13.2417 19.2 13 18.5 13H17V11C17 9.61667 16.5125 8.4375 15.5375 7.4625C14.5625 6.4875 13.3833 6 12 6C10.6167 6 9.4375 6.4875 8.4625 7.4625C7.4875 8.4375 7 9.61667 7 11H6.5C5.53333 11 4.70833 11.3417 4.025 12.025C3.34167 12.7083 3 13.5333 3 14.5C3 15.4667 3.34167 16.2917 4.025 16.975C4.70833 17.6583 5.53333 18 6.5 18Z"
              fill="#3C3C3C"
            />
          </g>
        </svg>
        <p>Saved</p>
      </div>
      <div className="size">12kb</div>
      <div className="font">
        <div className="font-size">
          <select name="font-size" id="font-size" onChange={handleFontChange}>
            {visibleSizes.map((size) => (
              <option key={size} value={size} selected={size === currentSize}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="font-family">
          <select
            name="font-family"
            id="font-family"
            onChange={handleFontFamilyChange}
          >
            <option value="Rubik">Rubik</option>
            <option value="Open Sans">Open Sans</option>
            <option value="PT Serif">PT Serif</option>
            <option value="Roboto Condensed">Roboto Condensed</option>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Monospace">Monospace</option> {/* Add this line */}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Info;
