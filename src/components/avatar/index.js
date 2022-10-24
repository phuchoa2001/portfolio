import React from 'react';
import Styles from './index.module.css';
function Avatar(props) {
    const image = process.env.PUBLIC_URL + '/image/avatar.jpg';
    return (
        <div className={Styles.Avatar}>
            <img src={image} className={Styles.img} alt="" />
        </div >
    );
}

export default Avatar;