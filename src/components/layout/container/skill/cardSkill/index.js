import React from 'react';
import Styles from './index.module.css';
function Cardskill({ name, url }) {
    return (
        <div className={"col col-3 sm-3 md-2 lg-2 xl-1 xxl-1"}>
            <div className={Styles.wrapper}>
                <div className={Styles.content}>
                    <div className={Styles.boximg}>
                        <img src={url} alt="item" className={Styles.img} />
                    </div>
                    <h3 className={Styles.name}>{name}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cardskill;