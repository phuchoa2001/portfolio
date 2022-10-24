import React from "react";
import clsx from "clsx";

import Styles from "../index.module.css";

import { useCategory } from "../queries";
import { Spin } from "antd";

function Category({ search, handleSearch }) {
  const { data, isLoading, isPreviousData, isFetching } = useCategory({});
  return (
    <div className={Styles.listTag}>
      <div className={Styles.wrapper}>
        <p
          className={clsx(Styles.tag, {
            [Styles.active]: !!!search.search,
          })}
          onClick={() => handleSearch("all")}
        >
          Tất cả
        </p>
        {!isLoading && !isPreviousData && !isFetching ? (
          data?.data?.data.map((item) => (
            <p
              key={item["_id"]}
              className={clsx(Styles.tag, {
                [Styles.active]: search.search === item.name,
              })}
              onClick={() => handleSearch(item.name)}
            >
              {item.name}
            </p>
          ))
        ) : (
          <Spin />
        )}
      </div>
    </div>
  );
}

export default Category;
