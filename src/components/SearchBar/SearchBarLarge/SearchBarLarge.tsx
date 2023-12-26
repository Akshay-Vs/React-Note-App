import { useState, useMemo } from "react";
import { useSetQuery } from "../../../hooks/useSetQuery";
import { useQuery } from "../../../hooks/useQuery";

import "./SearchBarLarge.scss";

const SearchBarLarge = () => {
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
    <div className="search-bar-large">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <mask
          id="mask0_33_186"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="28"
          height="28"
        >
          <rect width="28" height="28" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_33_186)">
          <path
            d="M22.8667 24.5039L15.5167 17.1539C14.9334 17.6206 14.2625 17.99 13.5042 18.2622C12.7459 18.5345 11.9389 18.6706 11.0834 18.6706C8.96392 18.6706 7.17017 17.9365 5.70211 16.4685C4.23406 15.0004 3.50003 13.2067 3.50003 11.0872C3.50003 8.96779 4.23406 7.17405 5.70211 5.70599C7.17017 4.23793 8.96392 3.50391 11.0834 3.50391C13.2028 3.50391 14.9966 4.23793 16.4646 5.70599C17.9327 7.17405 18.6667 8.96779 18.6667 11.0872C18.6667 11.9428 18.5306 12.7497 18.2584 13.5081C17.9861 14.2664 17.6167 14.9372 17.15 15.5206L24.5 22.8706L22.8667 24.5039ZM11.0834 16.3372C12.5417 16.3372 13.7813 15.8268 14.8021 14.806C15.8229 13.7852 16.3334 12.5456 16.3334 11.0872C16.3334 9.62891 15.8229 8.38932 14.8021 7.36849C13.7813 6.34766 12.5417 5.83724 11.0834 5.83724C9.62503 5.83724 8.38545 6.34766 7.36461 7.36849C6.34378 8.38932 5.83336 9.62891 5.83336 11.0872C5.83336 12.5456 6.34378 13.7852 7.36461 14.806C8.38545 15.8268 9.62503 16.3372 11.0834 16.3372Z"
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
        placeholder="Search notes..."
      />
    </div>
  );
};

export default SearchBarLarge;
