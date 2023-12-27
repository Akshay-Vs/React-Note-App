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
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
