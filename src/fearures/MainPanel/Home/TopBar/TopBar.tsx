import "./TopBar.scss";
import { ChangeEvent } from "react";
import { useSetQuery } from "../../../../hooks/useSetQuery";

const TopBar = (): JSX.Element => {
  const setQuery = useSetQuery();

  const handleMonthChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = event.target.value;
    setQuery({ month: selectedMonth });
  };

  return (
    <div className="top-bar">
      <div className="top-bar-wrapper">
        <div className="text-wrapper">Your notes</div>
        <select
          className="month-dropdown"
          defaultValue="all"
          onChange={handleMonthChange}
        >
          <option value="all">Select month</option>
          <option value="january">January</option>
          <option value="february">February</option>
          <option value="march">March</option>
          <option value="april">April</option>
          <option value="may">May</option>
          <option value="june">June</option>
          <option value="july">July</option>
          <option value="august">August</option>
          <option value="september">September</option>
          <option value="october">October</option>
          <option value="november">November</option>
          <option value="december">December</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
