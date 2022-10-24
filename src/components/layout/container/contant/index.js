import React from 'react';
import Styles from './index.module.css';
import clsx from 'clsx';
import Heading from '../heading';
function Contant(props) {
    return (
        <div className={clsx(Styles.contant, "contant")}>
            <Heading text="Liên hệ" />
            <div className={clsx(Styles.wrapper, "row gx-0")}>
                <div className="col col-12 sm-12 md-6 lg-6 xl-6 xxl-6">
                    <div className={Styles.wrapperItem}>
                        <div className={Styles.boxIcon}>
                            <i className={clsx("fa-solid fa-location-dot", Styles.Icon)}></i>
                        </div>
                        <div className={Styles.Info}>
                            <h3 className={Styles.heading}>
                                Địa chỉ
                            </h3>
                            <div className={Styles.text}>
                                Bình Thạch - HCM , Việt Nam
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-12 sm-12 md-6 lg-6 xl-6 xxl-6">
                    <div className={Styles.wrapperItem}>
                        <div className={Styles.boxIcon}>
                            <i className={clsx("fa-solid fa-envelope", Styles.Icon)}></i>
                        </div>
                        <a href="mailto:phuchoa2001.cv@gmail.com" className={Styles.Info}>
                            <h3 className={Styles.heading}>
                                Email
                            </h3>
                            <div className={Styles.text}>
                                phuchoa2001.cv@gmail.com
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contant;