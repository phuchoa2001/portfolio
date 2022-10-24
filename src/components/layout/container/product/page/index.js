import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import FilterListProduct from '../../../../../common/filterListProduct';
import { nextPage, prevPage } from '../../../../../redux/useListProduct';
function Page(props) {
    const dispatch = useDispatch();
    const ListProduct = useSelector(state => state.ListProduct);
    const { data, search } = ListProduct;
    const Pages = ListProduct.page;
    const Length = FilterListProduct(data, search).length;
    const handleNext = () => {
        dispatch(nextPage());
    }
    const handlePrev = () => {
        dispatch(prevPage());
    }
    return (
        <div className={Styles.page}>
            <div
                className={clsx(Styles.boxIcon, { [Styles.disabled]: Pages === 1 })}
                onClick={handlePrev}
            >
                <i className={clsx("fa-solid fa-chevron-left", Styles.icon)}></i>
            </div>
            <div
                className={clsx(Styles.boxIcon, { [Styles.disabled]: Pages * 4 >= Length })}
                onClick={handleNext}
            >
                <i className={clsx("fa-solid fa-angle-right", Styles.icon)}></i>
            </div>
        </div >
    );
}

export default Page;