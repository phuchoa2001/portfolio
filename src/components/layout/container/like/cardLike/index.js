import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
function Cardlike({ name, description, icon }) {
    return (
        <div className={"col col-12 sm-12 md-4 lg-4 xl-3 xxl-3"}>
            <div className={Styles.wrapper}>
                <div className={Styles.cardItem}>
                    <div className={Styles.headerCard}>
                        <i className={clsx(icon, Styles.cardIcon)}></i>
                    </div>
                    <div className={Styles.content}>
                        <h3 className={Styles.name}>{name}</h3>
                        <p className={Styles.description}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cardlike;