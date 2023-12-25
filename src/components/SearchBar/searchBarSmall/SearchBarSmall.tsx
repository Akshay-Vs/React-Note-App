import { useState, useMemo } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";
import { useQuery } from "../../../hooks/useQuery";

import "./SearchBarSmall.scss";

const SearchBarSmall = () => {
  const setQuery = useSetQuery();
  const { s } = useQuery();
  const [search, setSearch] = useState(s ? s[0] || "" : "");
  const memoizedSetQuery = useMemo(() => {
    return () => setQuery({ s: search });
  }, [search, setQuery]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      memoizedSetQuery();
    }
  };
  return (
    <div className="search-bar-small">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <mask
          id="mask0_15_26"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="22"
          height="22"
        >
          <rect width="22" height="22" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_15_26)">
          <path
            d="M17.9667 19.25L12.1917 13.475C11.7333 13.8417 11.2063 14.1319 10.6104 14.3458C10.0146 14.5597 9.38056 14.6667 8.70833 14.6667C7.04306 14.6667 5.63368 14.0899 4.48021 12.9365C3.32674 11.783 2.75 10.3736 2.75 8.70833C2.75 7.04306 3.32674 5.63368 4.48021 4.48021C5.63368 3.32674 7.04306 2.75 8.70833 2.75C10.3736 2.75 11.783 3.32674 12.9365 4.48021C14.0899 5.63368 14.6667 7.04306 14.6667 8.70833C14.6667 9.38056 14.5597 10.0146 14.3458 10.6104C14.1319 11.2063 13.8417 11.7333 13.475 12.1917L19.25 17.9667L17.9667 19.25ZM8.70833 12.8333C9.85417 12.8333 10.8281 12.4323 11.6302 11.6302C12.4323 10.8281 12.8333 9.85417 12.8333 8.70833C12.8333 7.5625 12.4323 6.58854 11.6302 5.78646C10.8281 4.98438 9.85417 4.58333 8.70833 4.58333C7.5625 4.58333 6.58854 4.98438 5.78646 5.78646C4.98438 6.58854 4.58333 7.5625 4.58333 8.70833C4.58333 9.85417 4.98438 10.8281 5.78646 11.6302C6.58854 12.4323 7.5625 12.8333 8.70833 12.8333Z"
            fill="#3C3C3C"
            fill-opacity="0.6"
          />
        </g>
      </svg>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchBarSmall;
