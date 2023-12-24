import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

export function useSetQuery() {
  const navigate = useNavigate();
  const { search } = useLocation();

  return (newParams: Record<string, string | boolean | number>) => {
    const params = queryString.parse(search);
    const updatedParams = { ...params, ...newParams };
    const newSearch = queryString.stringify(updatedParams);
    navigate("?" + newSearch);
  };
}