import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-scroll'
import clsx from 'clsx';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { sun, moon } from '../../../redux/useSetting';
import { play, stop } from '../../../redux/useMusic';
import Styles from './index.module.css';

function Menu(props) {
    const nightMode = useSelector(state => state.Setting.NightMode);
    const openMusic = useSelector(state => state.Music.open);
    const dispatch = useDispatch();
    const handleSun = () => {
        dispatch(sun());
    }
    const handleMoon = () => {
        dispatch(moon());
    }
    const handlePlay = () => {
        dispatch(play());
    }
    const handleStop = () => {
        dispatch(stop());
    }
    return (
        <div className={Styles.Menu}>
            <Tippy content="Trang chủ" >
                <div>
                    <Link to="greeting" spy={true} smooth={true} offset={50} duration={500}>
                        <div className={Styles.Boxicon}>
                            <i className={clsx("fas fa-home", Styles.icon)}></i>
                        </div>
                    </Link>
                </div>
            </Tippy>
            <Tippy content="Yêu thích" >
                <div>
                    <Link to="like" spy={true} smooth={true} offset={50} duration={500}>
                        <div className={Styles.Boxicon}>
                            <i className={clsx("fa-solid fa-heart", Styles.icon)}></i>
                        </div>
                    </Link>
                </div>
            </Tippy>
            <Tippy content="Kỹ năng" >
                <div>
                    <Link to="skill" spy={true} smooth={true} offset={50} duration={500}>
                        <div className={Styles.Boxicon}>
                            <i className={clsx("fa-solid fa-bolt", Styles.icon)}></i>
                        </div>
                    </Link>
                </div>
            </Tippy>
            <Tippy content="Dự án" >
                <div>
                    <Link to="product" spy={true} smooth={true} offset={50} duration={500}>
                        <div className={Styles.Boxicon}>
                            <i className={clsx("fa fa-television", Styles.icon)}></i>
                        </div>
                    </Link>
                </div>
            </Tippy>
            <Tippy content="Liên hệ" >
                <div>
                    <Link to="contant" spy={true} smooth={true} offset={50} duration={500}>
                        <div className={Styles.Boxicon}>
                            <i className={clsx("fa-solid fa-address-book", Styles.icon)}></i>
                        </div>
                    </Link>
                </div>
            </Tippy>
            {nightMode ?
                <Tippy content="chệ độ ban ngày" >
                    <div className={Styles.Boxicon} onClick={handleSun}>
                        <i className={clsx("fa-solid fa-sun", Styles.icon)}></i>
                    </div>
                </Tippy>
                :
                <Tippy content="chế độ ban đêm" >
                    <div className={Styles.Boxicon} onClick={handleMoon}>
                        <i className={clsx("fa-solid fa-moon", Styles.icon)}></i>
                    </div>
                </Tippy>
            }

            {!openMusic ?
                <Tippy content="bật nhạc thư giản nào" >
                    <div className={Styles.Boxicon} onClick={handlePlay}>
                        <i className={clsx("fa-solid fa-play", Styles.icon)}></i>
                    </div>
                </Tippy>
                :
                <Tippy content="thôi tắt nhạc" >
                    <div className={Styles.Boxicon} onClick={handleStop}>
                        <img src={process.env.PUBLIC_URL + '/image/music_icon.gif'} alt="icon" className={Styles.img} />
                    </div>
                </Tippy>
            }
        </div>
    );
}

export default Menu;