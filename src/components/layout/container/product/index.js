import React from 'react';
import { Spin, Pagination } from 'antd';

import Styles from './index.module.css';
import clsx from 'clsx';
import Item from './item';
import Heading from '../heading';

import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams';
import { useApp } from './queries';
// import Category from './category/Category';

function Product(props) {
    const [search, setSearch] = useCustomSearchParams({ page_size: 5 });
    const argument = {
        params: search,
        options: {
            keepPreviousData: true,
        },
    };
    const { data, isLoading, isPreviousData, isFetching } = useApp(argument);
    const handleChange = (query) => {
        setSearch({ ...search, page_size: search.page_size, page: query })
    }
    const handleSearch = (text) => {
        if (text === "all") {
            delete search.search
            setSearch({ ...search, page: 1 })
        } else {
            setSearch({ ...search, search: text, page: 1 })
        }
    }
    return (
        <div className={clsx(Styles.product, "product")}>
            <Heading text="Dự án" />
            {/* <Category search={search} handleSearch={handleSearch} /> */}
            <div className={clsx(Styles.listProduct, "row gx-0")}>
                {!isLoading && !isPreviousData && !isFetching ?
                    (
                        <>
                            {data.data.data.map((item, index) =>
                                <Item
                                    key={item["_id"]}
                                    {...item}
                                    search={search} handleSearch={handleSearch}
                                />)}
                            <div className={Styles.pagination}>
                                <Pagination
                                    onChange={handleChange}
                                    current={data.data.meta.current_page}
                                    total={data.data.meta.total}
                                    pageSize={5}
                                />
                            </div>
                        </>
                    ) : <Spin />}
            </div>
        </div>
    );
}

export default Product;