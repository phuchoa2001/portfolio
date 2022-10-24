import { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";

import { publicApi } from "../../../../api/publicApi";

export const AppKey = {
  all: ["app"],
  lists: () => [...AppKey.all, "list"],
  list: (filter) => [...AppKey.lists(), filter],
  details: () => [...AppKey.all, "detail"],
  detail: (id) => [...AppKey.details(), id],
};

export const useApp = ({ params, options }) => {
  return useQuery({
    queryKey: AppKey.list(params),
    queryFn: () => publicApi.getApp(params),
    ...options,
  });
};

export const useCategory = ({ options }) => {
  return useQuery({
    queryKey: AppKey.list("/public/category"),
    queryFn: () => publicApi.getCategory("/public/category"),
    options : {
      keepPreviousData: true
    }
  });
};

export const usePrefetchCompanies = (data, queryParams) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (data?.link?.next) {
      const newQueryParams = { ...queryParams, page: queryParams.page + 1 };

      queryClient.prefetchQuery(AppKey.list(newQueryParams), () =>
        publicApi.getAll(newQueryParams)
      );
    }
  }, [data, queryParams, queryClient]);
};
