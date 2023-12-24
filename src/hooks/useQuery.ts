import { useLocation } from "react-router-dom";
import queryString from "query-string";

export function useQuery() {
  const { search } = useLocation();
  return queryString.parse(search);
}