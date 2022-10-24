import React from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';

import Styles from './index.module.css';
import { sun, moon } from '../../redux/useSetting';
function ModeNight(props) {
    const nightMode = useSelector(state => state.Setting.NightMode);
    const dispatch = useDispatch();
    const handleSun = () => {
        dispatch(sun());
    }
    const handleMoon = () => {
        dispatch(moon());
    }
    return (
        <>
            {nightMode ? <button className={Styles.btn} onClick={handleSun} style={{ background: nightMode ? "#333" : "#efefef" }}>
                <i className={clsx("fa-solid fa-sun", Styles.icon)}></i>
                Chế tạo ban ngày
            </button> : <button className={Styles.btn} onClick={handleMoon}>
                <i className={clsx("fa-solid fa-moon", Styles.icon)}></i>
                Chế tạo buổi tối
            </button>}
        </>
    );
}
export default ModeNight;