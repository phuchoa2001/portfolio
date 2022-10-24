import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useMemo } from 'react'

const DEFAULT_PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};;

export const useCustomSearchParams = ({ page_size }) => {
  const { search } = useLocation();
  let history = useHistory();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const queryArr = {};
  const setQuery = (object) => {
    let search = "?";
    for (const property in object) {
      search += `${property}=${object[property]}&`
    }
    history.push({
      pathname: history.location.pathname,
      search: search.slice(0, search.length - 1)
    })
  }
  searchParams.forEach((el, i) => {
    queryArr[i] = el;
  });
  return [{
    ...queryArr,
    page: +queryArr.page || DEFAULT_PAGINATION.PAGE,
    page_size: +queryArr.page_size || page_size
  }, setQuery];
};
