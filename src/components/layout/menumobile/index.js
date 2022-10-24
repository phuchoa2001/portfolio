import React, { useState } from 'react';
import clsx from 'clsx';
import { Link } from 'react-scroll'

import Styles from './index.module.css';
import ModeNight from '../../modenigth';
import PlayMusic from '../../playmusic';
function Menumobile(props) {
    const [open, setOpen] = useState(false);
    const handleToogle = () => {
        setOpen(prev => !prev);
    }
    return (
        <div className={clsx(Styles.menumobile, {
            [Styles.open]: open
        }, "menumobile")}>
            <div className={Styles.warpper}>
                <h3 className={Styles.name}>PortFolio</h3>
                <div className={Styles.boxIcon} onClick={handleToogle}>
                    <i className={`fa ${open ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
                </div>
            </div>
            <ul className={Styles.subMenu} style={{ display: open ? "block" : "none" }} >
                <Link to="greeting" spy={true} smooth={true} offset={50} duration={500} onClick={handleToogle}>
                    <li className={clsx(Styles.item, "item", "active")}>
                        <i className={clsx("fas fa-home", Styles.icon)}></i>
                        <p className={Styles.href}>Hơme</p>
                    </li>
                </Link>
                <Link to="like" spy={true} smooth={true} offset={50} duration={500} onClick={handleToogle}>
                    <li className={clsx(Styles.item, "item")}>
                        <i className={clsx("fa-solid fa-heart", Styles.icon)}></i>
                        <p className={Styles.href}>Yêu thích</p>
                    </li>
                </Link>
                <Link to="skill" spy={true} smooth={true} offset={50} duration={500} onClick={handleToogle}>
                    <li className={clsx(Styles.item, "item")}>
                        <i className={clsx("fa-solid fa-bolt", Styles.icon)}></i>
                        <p className={Styles.href}>Kĩ năng</p>
                    </li>
                </Link>
                <Link to="product" spy={true} smooth={true} offset={50} duration={500} onClick={handleToogle}>
                    <li className={clsx(Styles.item, "item")}>
                        <i className={clsx("fa fa-television", Styles.icon)}></i>
                        <p className={Styles.href}>Dự án</p>
                    </li>
                </Link>
                <Link to="contant" spy={true} smooth={true} offset={50} duration={500} onClick={handleToogle}>
                    <li className={clsx(Styles.item, "item")}>
                        <i className={clsx("fa-solid fa-address-book", Styles.icon)}></i>
                        <p className={Styles.href}>Liên hệ</p>
                    </li>
                </Link>
                <div className={Styles.Box}>
                    <ModeNight />
                </div>
                <PlayMusic />
            </ul>
        </div >
    );
}

export default Menumobile;